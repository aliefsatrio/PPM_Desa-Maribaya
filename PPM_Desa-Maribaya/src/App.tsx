import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Infografis from "./pages/Infografis";
import Berita from "./pages/Berita";
import ProfilDesa from "./pages/Profil_desa";
import DetailLayanan from "./pages/DetailLayanan";
import LoginForm from "./pages/LoginFrom";

import MainLayout from "./layout/MainLayout";
import { DashboardLayout } from "./layout/DashboardLayout";

import DashboardPage from "./pages/Admin/DashboardPage";
import PendudukPage from "./pages/Admin/PendudukPage";
import BeritaPage from "./pages/Admin/BeritaPage";
import VisiMisiPage from "./pages/Admin/VisiMisiPage";
import ApbdesPage from "./pages/Admin/APBDesa";
import AdminLogout from "./pages/Admin/AdminLogout";
import ProtectedRoutes from "./routes/ProtectedRoutes";

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman Publik */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="Profil_desa" element={<ProfilDesa />} />
          <Route path="berita" element={<Berita />} />
          <Route path="infografis" element={<Infografis />} />     {/* Halaman yang wajib login */}
          <Route path="layanan/:slug" element={<DetailLayanan />} />
        </Route>

        {/* Dashboard Admin */}
        <Route path="login" element={<LoginForm />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route element={<ProtectedRoutes />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="penduduk" element={<PendudukPage />} />
            <Route path="admin/berita" element={<BeritaPage />} />
            <Route path="visi-misi" element={<VisiMisiPage />} />
            <Route path="apbdes" element={<ApbdesPage />} />
            <Route path="logout" element={<AdminLogout />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;