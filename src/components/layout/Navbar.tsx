import { ChevronDown, LogOut, Menu, UserRound } from 'lucide-react';
import { useState } from 'react';
import { useAuthStore } from '../../store/authStore';

type NavbarProps = {
  onOpenMobile: () => void;
};

export function Navbar({ onOpenMobile }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuthStore();

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-100 bg-white/90 px-4 backdrop-blur lg:px-8">
      <div className="flex items-center gap-3">
        <button className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden" onClick={onOpenMobile} aria-label="Buka menu">
          <Menu size={20} />
        </button>
        <div>
          <p className="text-sm text-slate-500">Selamat bekerja,</p>
          <h1 className="text-base font-semibold text-slate-950">{user?.name ?? 'Admin Desa'}</h1>
        </div>
      </div>

      <div className="relative">
        <button className="flex items-center gap-3 rounded-lg border border-slate-100 bg-white px-2 py-1.5 shadow-sm transition hover:bg-slate-50" onClick={() => setOpen((value) => !value)}>
          <img src={user?.avatarUrl} alt={user?.name} className="h-9 w-9 rounded-lg object-cover" />
          <div className="hidden text-left sm:block">
            <p className="text-sm font-semibold text-slate-950">{user?.name}</p>
            <p className="text-xs text-slate-500">{user?.role}</p>
          </div>
          <ChevronDown size={16} className="text-slate-400" />
        </button>

        {open ? (
          <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-lg border border-slate-100 bg-white shadow-soft">
            <div className="border-b border-slate-100 px-4 py-3">
              <p className="text-sm font-semibold text-slate-950">{user?.name}</p>
              <p className="text-xs text-slate-500">{user?.email}</p>
            </div>
            <button className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm text-slate-600 hover:bg-slate-50">
              <UserRound size={16} /> Profil Admin
            </button>
            <button className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm text-rose-600 hover:bg-rose-50" onClick={logout}>
              <LogOut size={16} /> Logout
            </button>
          </div>
        ) : null}
      </div>
    </header>
  );
}
