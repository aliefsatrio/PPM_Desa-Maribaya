import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // 1. Tambahkan useLocation
import { NavLink } from "react-router-dom";
import { UserCircle } from "lucide-react"

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // 2. Panggil useLocation

  // 3. Cek apakah kita di halaman beranda
  const isHome = location.pathname === "/";

  // 4. Logika penentu: Navbar solid JIKA di-scroll ATAU JIKA BUKAN di halaman beranda
  const isSolid = scrolled || !isHome;

  const activeStyle = "text-blue-600";
  const defaultStyle = isSolid ? "text-black" : "text-white";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // cek posisi scroll saat route berubah
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        ${isSolid ? "bg-[#6EA1DF] py-5" : "bg-transparent py-5"}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-20">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-md"></div>

          {/* Gunakan isSolid untuk menentukan warna teks */}
          <div className={`${isSolid ? "text-black" : "text-white"}`}>
            <h1 className="font-semibold text-sm">
              Desa Maribaya
            </h1>
            <p className="text-xs">
              Kabupaten Tegal
            </p>
          </div>
        </div>

        {/* MENU */}
        {/* MENU & LOGIN */}
        <ul
          className={`
            hidden md:flex items-center gap-8 font-medium
            ${isSolid ? "text-black" : "text-white"}
          `}
        >
          <li className="flex items-center">
            <Link to="/" className="hover:opacity-75 transition-opacity">Home</Link>
          </li>
          <li className="flex items-center">
            <Link to="/Profil_desa" className="hover:opacity-75 transition-opacity">Profil Desa</Link>
          </li>
          <li className="flex items-center">
            <Link to="/infografis" className="hover:opacity-75 transition-opacity">Infografis</Link>
          </li>
          <li className="flex items-center">
            <Link to="/berita" className="hover:opacity-75 transition-opacity">Berita</Link>
          </li>

          <li className="flex items-center">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `flex items-center transition-all duration-200 hover:opacity-75 
                ${isActive ? activeStyle : defaultStyle}`
              }
            >
              {/* 
                1. Ukuran diubah jadi 24 agar lebih pas dengan teks font-medium
                2. Ditambahkan -mt-[2px] (margin-top minus 2 pixel) untuk menarik ikon sedikit ke atas 
                   agar sejajar secara visual dengan huruf teks. (Angkanya bisa kamu sesuaikan)
              */}
              <UserCircle size={24} strokeWidth={2} className="-mt-2px" />
            </NavLink>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;