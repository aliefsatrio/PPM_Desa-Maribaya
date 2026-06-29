import React from "react";
import { LayoutList } from "lucide-react";
import { Link } from "react-router-dom";
import kades from "../../assets/Andi baik.png";
import sekdes from "../../assets/sekdes.jpeg";
import bpd from "../../assets/ketua_bpd.jpeg";

const dataSOTK = [
  {
    title: "Kepala Desa",
    image: kades,
  },
  {
    title: "Sekretaris Desa",
    image: sekdes,
  },
  {
    title: "Ketua BPD",
    image: bpd,
  },
  {
    title: "Wakil Ketua BPD",
    image: "/images/sotk-bpd.webp",
  },
];

const Statistik: React.FC = () => {
  return (
    <section className="bg-white px-6 py-20 md:px-20">
      <h2 className="text-4xl font-bold">SOTK</h2>

      <p className="mb-10 mt-1 text-gray-600">
        Struktur Organisasi dan Tata Kerja Desa Maribaya
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {dataSOTK.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-[10px] bg-white shadow-md ring-1 ring-gray-200"
          >
            <div className="h-[260px] w-full overflow-hidden bg-gray-100">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Desa Maribaya
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <Link
          to="/Profil_desa"
          className="flex items-center gap-2 text-black hover:underline"
        >
          <LayoutList size={18} />
          Lihat Struktur Lebih Lengkap
        </Link>
      </div>
    </section>
  );
};

export default Statistik;