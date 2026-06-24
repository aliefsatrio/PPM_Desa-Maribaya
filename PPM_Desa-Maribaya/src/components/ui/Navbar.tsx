import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { UserCircle } from "lucide-react";
import logo from "../../assets/download.png";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();

  const isHome = location.pathname === "/";
  const isSolid = scrolled || !isHome;

  const activeStyle = "text-blue-600";
  const defaultStyle = isSolid ? "text-black" : "text-white";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isSolid
          ? "bg-[#6EA1DF] py-5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="h-12 w-12">
            <img
              className="w-10"
              src={logo}
              alt="Logo Desa"
            />
          </div>

          <div
            className={
              isSolid ? "text-black" : "text-white"
            }
          >
            <h1 className="text-sm font-semibold">
              Desa Maribaya
            </h1>

            <p className="text-xs">
              Kabupaten Tegal
            </p>
          </div>
        </div>

        {/* Menu */}
        <ul
          className={`hidden items-center gap-8 font-medium md:flex ${
            isSolid ? "text-black" : "text-white"
          }`}
        >
          <li>
            <Link
              to="/"
              className="hover:opacity-75"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/Profil_desa"
              className="hover:opacity-75"
            >
              Profil Desa
            </Link>
          </li>

          <li>
            <Link
              to="/infografis"
              className="hover:opacity-75"
            >
              Infografis
            </Link>
          </li>

          <li>
            <Link
              to="/berita"
              className="hover:opacity-75"
            >
              Berita
            </Link>
          </li>

          {/* User */}
          <li className="flex items-center gap-2">
            <NavLink
              to={isLoggedIn ? "/akun" : "/login"}
              className={({ isActive }) =>
                `flex items-center transition-all duration-200 hover:opacity-75 ${
                  isActive ? activeStyle : defaultStyle
                }`
              }
            >
              <UserCircle
                size={26}
                strokeWidth={2}
                className={
                  isLoggedIn
                    ? "text-green-600"
                    : ""
                }
              />
            </NavLink>

            {isLoggedIn && (
              <span className="text-sm">
                Akun Saya
              </span>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;