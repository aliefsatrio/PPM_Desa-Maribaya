import { AlertTriangle } from 'lucide-react';
import { Button } from './Button';
import { Modal } from './Modal';

type ConfirmDialogProps = {
  open: boolean;
  title?: string;
  message?: string;
  onCancel: () => void;
  onConfirm: () => void;
};

export function ConfirmDialog({ open, title = 'Hapus data?', message = 'Data yang dihapus tidak dapat dikembalikan.', onCancel, onConfirm }: ConfirmDialogProps) {
  return (
    <Modal open={open} title={title} onClose={onCancel}>
      <div className="flex gap-4">
        <div className="h-fit rounded-full bg-rose-50 p-3 text-rose-600">
          <AlertTriangle size={22} />
        </div>
        <div>
          <p className="text-sm leading-6 text-slate-600">{message}</p>
          <div className="mt-6 flex justify-end gap-3">
            <Button variant="secondary" onClick={onCancel}>Batal</Button>
            <Button variant="danger" onClick={onConfirm}>Hapus</Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
