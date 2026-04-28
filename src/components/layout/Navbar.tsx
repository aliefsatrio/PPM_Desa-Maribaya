import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-[#6EA1DF] shadow-md py-3" : "bg-transparent py-5"}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-20">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-md"></div>

          <div className={`${scrolled ? "text-black" : "text-white"}`}>
            <h1 className="font-semibold text-sm">
              Desa Maribaya
            </h1>
            <p className="text-xs">
              Kabupaten Tegal
            </p>
          </div>
        </div>

        {/* MENU */}
        <ul
          className={`
            hidden md:flex gap-8 font-medium
            ${scrolled ? "text-black" : "text-white"}
          `}
        >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profil">Profil Desa</Link></li>
          <li><Link to="/infografis">Infografis</Link></li>
          <li><Link to="/berita">Berita</Link></li>
          <li><Link to="/ppid">PPID</Link></li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;