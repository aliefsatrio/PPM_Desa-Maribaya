import { Plus } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import { ConfirmDialog } from '../../components/common/ConfirmDialog';
import { LoadingSkeleton } from '../../components/common/LoadingSkeleton';
import { Modal } from '../../components/common/Modal';
import { DynamicForm } from '../../components/forms/DynamicForm';
import { DataTable } from '../../components/tables/DataTable';
import type { CrudService, ModuleConfig } from '../../types/common';
import { titleCase } from '../../utils/format';

type CrudPageProps<T extends { id?: string | number }> = {
  config: ModuleConfig<T>;
  service: CrudService<T>;
};

export function CrudPage<T extends { id?: string | number }>({ config, service }: CrudPageProps<T>) {
  const [rows, setRows] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [formOpen, setFormOpen] = useState(false);
  const [detailRow, setDetailRow] = useState<T | null>(null);
  const [editingRow, setEditingRow] = useState<T | null>(null);
  const [deleteRow, setDeleteRow] = useState<T | null>(null);

  const fetchRows = async () => {
    setLoading(true);
    const data = await service.getAll();
    setRows(data);
    setLoading(false);
  };

  useEffect(() => {
    void fetchRows();
  }, []);

  const filteredRows = useMemo(() => {
    const keyword = search.toLowerCase().trim();
    if (!keyword) return rows;
    return rows.filter((row) =>
      config.searchKeys.some((key) => String(row[key] ?? '').toLowerCase().includes(keyword))
    );
  }, [config.searchKeys, rows, search]);

  const defaultValues = (editingRow ?? config.createDefault()) as T & Record<string, unknown>;

  const handleSubmit = async (values: T) => {
    if (editingRow?.id) {
      await service.update(editingRow.id, values);
    } else {
      await service.create(values);
    }
    setFormOpen(false);
    setEditingRow(null);
    await fetchRows();
  };

  const handleDelete = async () => {
    if (deleteRow?.id) {
      await service.delete(deleteRow.id);
      setDeleteRow(null);
      await fetchRows();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-primary-700">Manajemen Data</p>
          <h1 className="mt-1 text-2xl font-semibold text-slate-950">{config.title}</h1>
          <p className="mt-2 text-sm text-slate-500">{config.description}</p>
        </div>
        <Button icon={<Plus size={18} />} onClick={() => { setEditingRow(null); setFormOpen(true); }}>Tambah Data</Button>
      </div>

      <Card className="p-5">
        {loading ? (
          <LoadingSkeleton />
        ) : (
          <DataTable
            data={filteredRows}
            columns={config.columns}
            search={search}
            onSearch={setSearch}
            onDetail={setDetailRow}
            onEdit={(row) => { setEditingRow(row); setFormOpen(true); }}
            onDelete={setDeleteRow}
          />
        )}
      </Card>

      <Modal open={formOpen} title={editingRow ? `Edit ${config.title}` : `Tambah ${config.title}`} onClose={() => { setFormOpen(false); setEditingRow(null); }}>
        <DynamicForm fields={config.fields} defaultValues={defaultValues} onSubmit={handleSubmit} onCancel={() => { setFormOpen(false); setEditingRow(null); }} />
      </Modal>

      <Modal open={Boolean(detailRow)} title={`Detail ${config.title}`} onClose={() => setDetailRow(null)}>
        <dl className="grid gap-4 sm:grid-cols-2">
          {detailRow ? Object.entries(detailRow).map(([key, value]) => (
            <div key={key} className={key === 'konten' || key === 'misi' || key === 'visi' ? 'sm:col-span-2' : ''}>
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">{titleCase(key)}</dt>
              <dd className="mt-1 rounded-lg bg-slate-50 px-3 py-2 text-sm leading-6 text-slate-700">
                {key === 'thumbnail' && typeof value === 'string' ? <img src={value} alt="Thumbnail berita" className="max-h-56 rounded-lg object-cover" /> : String(value)}
              </dd>
            </div>
          )) : null}
        </dl>
      </Modal>

      <ConfirmDialog open={Boolean(deleteRow)} onCancel={() => setDeleteRow(null)} onConfirm={handleDelete} />
    </div>
  );
}
