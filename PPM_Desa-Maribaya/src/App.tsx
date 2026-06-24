import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Infografis from "./pages/Infografis";
import Berita from "./pages/Berita";
import ProfilDesa from "./pages/Profil_desa";
import MainLayout from "./layout/MainLayout";
import DetailLayanan from "./pages/DetailLayanan";


function App() {
  return (
    <Router>
      <div className="w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/Profil_desa" element={<ProfilDesa />} />
            <Route path="/infografis" element={<Infografis />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/layanan/:slug" element={<DetailLayanan />} />
            
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;