import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Infografis from "./pages/Infografis";
import Berita from "./pages/Berita";

function App() {
  return (
    <Router>
      <div className="w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/infografis" element={<Infografis />} />
          <Route path="/berita" element={<Berita />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;