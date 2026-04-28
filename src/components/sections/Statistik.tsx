import React from "react";
import { LayoutList } from "lucide-react";

const dataSOTK = [1, 2, 3, 4];

const Statistik: React.FC = () => {
    return (
        <section className="px-6 md:px-20 py-20 bg-white">

            {/* TITLE */}
            <h2 className="text-4xl font-bold">
                SOTK
            </h2>

            <p className="text-gray-600 mt-1 mb-10">
                Struktur Organisasi dan Tata Kerja Maribaya
            </p>

            {/* CARD WRAPPER */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {dataSOTK.map((_, index) => (
                    <div
                        key={index}
                        className="w-full aspect-square bg-gray-300 rounded-[10px] flex items-center justify-center text-gray-500"
                    >
                        gambar
                    </div>
                ))}
            </div>

            {/* BUTTON */}
            <div className="mt-8 flex justify-end">
                <button className="flex items-center gap-2 text-black hover:underline">
                    <LayoutList size={18} />
                    Lihat Struktur Lebih Lengkap
                </button>
            </div>

        </section>
    );
};

export default Statistik;