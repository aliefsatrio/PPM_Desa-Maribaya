import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#6EA1DF] text-black px-6 md:px-20 py-12">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* LEFT */}
        <div>
          <h2 className="text-xl font-bold mb-2">
            Desa Maribaya
          </h2>
          <p className="text-sm">
            Kabupaten Tegal
          </p>

          <p className="mt-4 text-sm text-black/80">
            Website resmi desa sebagai pusat informasi, layanan, dan transparansi pemerintahan desa.
          </p>
        </div>

        {/* MENU */}
        <div>
          <h3 className="font-semibold mb-3">
            Menu
          </h3>

          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Profil Desa</li>
            <li className="hover:underline cursor-pointer">Infografis</li>
            <li className="hover:underline cursor-pointer">Berita</li>
            <li className="hover:underline cursor-pointer">PPID</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-3">
            Kontak
          </h3>

          <div className="space-y-3 text-sm">

            <div className="flex items-start gap-2">
              <MapPin size={16} />
              <p>Desa Maribaya, Kec. Kramat, Kab. Tegal</p>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} />
              <p>desa@maribaya.id</p>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} />
              <p>+62 812 3456 7890</p>
            </div>

          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-black/20 mt-10 pt-4 text-center text-sm">
        © 2026 Desa Maribaya. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;