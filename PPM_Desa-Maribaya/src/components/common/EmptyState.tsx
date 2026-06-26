import { Inbox } from 'lucide-react';

type EmptyStateProps = {
  title?: string;
  description?: string;
};

export function EmptyState({ title = 'Data belum tersedia', description = 'Tambahkan data baru untuk mulai mengelola modul ini.' }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-slate-200 bg-slate-50 px-6 py-12 text-center">
      <div className="mb-3 rounded-full bg-primary-50 p-3 text-primary-600">
        <Inbox size={24} />
      </div>
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 max-w-md text-sm text-slate-500">{description}</p>
    </div>
  );
}