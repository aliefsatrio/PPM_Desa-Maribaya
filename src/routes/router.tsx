import { createBrowserRouter } from 'react-router-dom';
import { AdminLayout } from '../layouts/AdminLayout';
import LoginPage from '../pages/auth/LoginPage';
import BeritaPage from '../pages/berita/BeritaPage';
import BltPage from '../pages/blt/BltPage';
import BpjsPage from '../pages/bpjs/BpjsPage';
import BpntPage from '../pages/bpnt/BpntPage';
import DashboardPage from '../pages/dashboard/DashboardPage';
import KkPage from '../pages/kk/KkPage';
import PendudukPage from '../pages/penduduk/PendudukPage';
import PerkawinanPage from '../pages/perkawinan/PerkawinanPage';
import PkhPage from '../pages/pkh/PkhPage';
import PstnPage from '../pages/pstn/PstnPage';
import StuntingPage from '../pages/stunting/StuntingPage';
import VisiMisiPage from '../pages/visimisi/VisiMisiPage';
import { ProtectedRoute } from './ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          { index: true, element: <DashboardPage /> },
          { path: 'bpjs', element: <BpjsPage /> },
          { path: 'bpnt', element: <BpntPage /> },
          { path: 'pkh', element: <PkhPage /> },
          { path: 'blt', element: <BltPage /> },
          { path: 'pstn', element: <PstnPage /> },
          { path: 'stunting', element: <StuntingPage /> },
          { path: 'penduduk', element: <PendudukPage /> },
          { path: 'kk', element: <KkPage /> },
          { path: 'perkawinan', element: <PerkawinanPage /> },
          { path: 'visimisi', element: <VisiMisiPage /> },
          { path: 'berita', element: <BeritaPage /> }
        ]
      }
    ]
  }
]);
