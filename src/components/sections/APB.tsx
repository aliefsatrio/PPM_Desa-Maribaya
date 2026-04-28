import React from "react";
import { TrendingUp, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const APB: React.FC = () => {
    return (
        <section className="px-6 md:px-20 py-20 bg-white">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* ICON */}
                <div className="flex justify-center md:justify-start">
                    <TrendingUp size={400} className="text-black" />
                </div>

                {/* CONTENT */}
                <div>

                    <h2 className="text-3xl md:text-4xl font-bold">
                        APB Desa 2026
                    </h2>

                    <p className="text-gray-600 mt-2 mb-6 max-w-md">
                        Akses cepat dan transparan terhadap APB Desa serta proyek pembangunan
                    </p>

                    <div className="bg-[#D9D9D9] rounded-md px-6 py-4 mb-3 w-full max-w-[665px]">
                        <p className="text-sm text-gray-700">Pendapatan Desa</p>
                        <h3 className="text-2xl font-bold text-right">
                            Rp 10.000.000.000
                        </h3>
                    </div>

                    <div className="bg-[#D9D9D9] rounded-md px-6 py-4 w-full max-w-[665px]">
                        <p className="text-sm text-gray-700">Belanja Desa</p>
                        <h3 className="text-2xl font-bold text-right">
                            Rp 10.000.000.000
                        </h3>
                    </div>

                    {/* 🔥 BUTTON */}
                    <Link
                        to="/infografis"
                        className="flex items-center gap-2 mt-6 text-black font-medium hover:underline"
                    >
                        <FileText size={18} />
                        Lihat Data Lebih Lengkap
                    </Link>

                </div>

            </div>

        </section>
    );
};

export default APB;