import { X } from 'lucide-react';
import type { ReactNode } from 'react';

type ModalProps = {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
};

export function Modal({ open, title, children, onClose }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 px-4 py-6 backdrop-blur-sm">
      <div className="max-h-[92vh] w-full max-w-2xl overflow-hidden rounded-lg bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <h2 className="text-base font-semibold text-slate-950">{title}</h2>
          <button className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900" onClick={onClose} aria-label="Tutup modal">
            <X size={18} />
          </button>
        </div>
        <div className="max-h-[calc(92vh-72px)] overflow-y-auto p-6">{children}</div>
      </div>
    </div>
  );
}
