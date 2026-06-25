import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable, type CellContext, type ColumnDef } from '@tanstack/react-table';
import { ChevronLeft, ChevronRight, Eye, Pencil, Search, Trash2 } from 'lucide-react';
import { useMemo } from 'react';
import { Button } from '../common/Button';
import { EmptyState } from '../common/EmptyState';
import { titleCase } from '../../utils/format';

type DataTableProps<T extends { id?: string | number }> = {
  data: T[];
  columns: Array<keyof T & string>;
  search: string;
  onSearch: (value: string) => void;
  onDetail: (row: T) => void;
  onEdit: (row: T) => void;
  onDelete: (row: T) => void;
};

const preview = (value: unknown) => {
  const text = String(value ?? '-');
  return text.length > 80 ? `${text.slice(0, 80)}...` : text;
};

export function DataTable<T extends { id?: string | number }>({ data, columns, search, onSearch, onDetail, onEdit, onDelete }: DataTableProps<T>) {
  const tableColumns = useMemo<ColumnDef<T>[]>(() => [
    ...columns.map((key) => ({
      accessorKey: key,
      header: titleCase(key),
      cell: ({ getValue }: CellContext<T, unknown>) => {
        const value = getValue();
        if (key === 'thumbnail' && typeof value === 'string') {
          return <img src={value} alt="Thumbnail berita" className="h-12 w-20 rounded-md object-cover" />;
        }
        return <span className="text-sm text-slate-700">{preview(value)}</span>;
      }
    })),
    {
      id: 'actions',
      header: 'Aksi',
      cell: ({ row }) => (
        <div className="flex items-center justify-end gap-1">
          <button className="rounded-lg p-2 text-slate-500 transition hover:bg-primary-50 hover:text-primary-700" onClick={() => onDetail(row.original)} aria-label="Detail">
            <Eye size={16} />
          </button>
          <button className="rounded-lg p-2 text-slate-500 transition hover:bg-amber-50 hover:text-amber-700" onClick={() => onEdit(row.original)} aria-label="Edit">
            <Pencil size={16} />
          </button>
          <button className="rounded-lg p-2 text-slate-500 transition hover:bg-rose-50 hover:text-rose-700" onClick={() => onDelete(row.original)} aria-label="Hapus">
            <Trash2 size={16} />
          </button>
        </div>
      )
    }
  ], [columns, onDelete, onDetail, onEdit]);

  const table = useReactTable({
    data,
    columns: tableColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 6 } }
  });

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-sm">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-primary-400 focus:ring-4 focus:ring-primary-100"
            placeholder="Cari data..."
            value={search}
            onChange={(event) => onSearch(event.target.value)}
          />
        </div>
        <p className="text-sm text-slate-500">{data.length} data ditampilkan</p>
      </div>

      {data.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="overflow-hidden rounded-lg border border-slate-100">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-100">
              <thead className="bg-slate-50">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th key={header.id} className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 last:text-right">
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id} className="transition hover:bg-primary-50/40">
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="max-w-xs px-5 py-4 align-middle">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <span className="text-sm text-slate-500">
          Halaman {table.getState().pagination.pageIndex + 1} dari {table.getPageCount() || 1}
        </span>
        <div className="flex gap-2">
          <Button variant="secondary" icon={<ChevronLeft size={16} />} disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>Sebelumnya</Button>
          <Button variant="secondary" icon={<ChevronRight size={16} />} disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>Berikutnya</Button>
        </div>
      </div>
    </div>
  );
}
