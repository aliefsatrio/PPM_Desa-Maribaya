import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Infografis from "./pages/Infografis";
import Berita from "./pages/Berita";
import ProfilDesa from "./pages/Profil_desa";
import DetailLayanan from "./pages/DetailLayanan";
import LoginForm from "./pages/LoginFrom";
import Akun from "./pages/Akun";

import MainLayout from "./layout/MainLayout";
import ProtectedRoutes from "./routes/ProtectedRoutes";

function App() {
  return (
    <Router>
      <div className="w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {/* Halaman publik */}
            <Route index element={<Home />} />
            <Route path="Profil_desa" element={<ProfilDesa />} />
            <Route path="berita" element={<Berita />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="infografis" element={<Infografis />} />

            {/* Halaman yang wajib login */}
            <Route element={<ProtectedRoutes />}>
              <Route path="akun" element={<Akun />} />
              <Route
                path="layanan/:slug"
                element={<DetailLayanan />}
              />
            </Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;