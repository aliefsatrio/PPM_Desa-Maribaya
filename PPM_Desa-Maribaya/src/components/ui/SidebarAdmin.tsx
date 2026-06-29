import { LayoutDashboard, LogOut, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { moduleConfigs } from '../../services/modules';
import { useAuthStore } from '../../store/authStore';

type SidebarProps = {
  collapsed: boolean;
  mobileOpen: boolean;
  onToggleCollapse: () => void;
  onCloseMobile: () => void;
};

export function Sidebar({ collapsed, mobileOpen, onToggleCollapse, onCloseMobile }: SidebarProps) {
  const logout = useAuthStore((state) => state.logout);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${isActive ? 'bg-primary-50 text-primary-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'
    }`;

  return (
    <>
      <div className={`fixed inset-0 z-30 bg-slate-950/40 transition lg:hidden ${mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`} onClick={onCloseMobile} />
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex border-r border-slate-100 bg-white transition-all duration-300 lg:translate-x-0 ${collapsed ? 'lg:w-20' : 'lg:w-72'
          } ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} w-72`}
      >
        <div className="flex min-h-0 w-full flex-col">
          <div className="flex h-16 items-center justify-between border-b border-slate-100 px-4">
            <div className={`flex items-center gap-3 ${collapsed ? 'lg:justify-center' : ''}`}>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-600 text-sm font-bold text-white">D</div>
              <div className={collapsed ? 'hidden' : 'block'}>
                <p className="text-sm font-bold text-slate-950">Admin Desa</p>
                <p className="text-xs text-slate-500">Web Profile</p>
              </div>
            </div>
            <button className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden" onClick={onCloseMobile} aria-label="Tutup menu">
              <X size={18} />
            </button>
            <button className="hidden rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:block" onClick={onToggleCollapse} aria-label="Ciutkan sidebar">
              <Menu size={18} />
            </button>
          </div>

          <nav className="min-h-0 flex-1 space-y-1 overflow-y-auto px-3 py-4">
            <NavLink to="/dashboard" className={navClass} onClick={onCloseMobile}>
              <LayoutDashboard size={19} />
              <span className={collapsed ? 'lg:hidden' : ''}>Dashboard</span>
            </NavLink>
            {moduleConfigs.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink key={item.key} to={item.path} className={navClass} onClick={onCloseMobile}>
                  <Icon size={19} />
                  <span className={collapsed ? 'lg:hidden' : ''}>{item.title}</span>
                </NavLink>
              );
            })}
          </nav>

          <div className="border-t border-slate-100 p-3" >
            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-rose-50 hover:text-rose-700" onClick={logout}>
              <Link to="/akun">
                <LogOut size={19} />
                <span className={collapsed ? 'lg:hidden' : ''}>Logout</span>
              </Link>
            </button>
          </div>
        </div>
      </aside >
    </>
  );
}