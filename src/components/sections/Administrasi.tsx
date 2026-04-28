import React from "react";

const data = [
    { label: "Penduduk", value: "1.158" },
    { label: "Kepala Keluarga", value: "308" },
    { label: "Penduduk Sementara", value: "107" },
    { label: "Laki-laki", value: "606" },
    { label: "Perempuan", value: "552" },
    { label: "Mutasi Penduduk", value: "50" },
];

const Administrasi: React.FC = () => {
    return (
        <section className="px-6 md:px-20 py-20 bg-white">

            {/* TITLE */}
            <h2 className="text-4xl font-bold">
                Administrasi Penduduk
            </h2>

            {/* DESKRIPSI */}
            <p className="text-gray-600 mt-2 max-w-2xl mb-10">
                Sistem digital yang berfungsi mempermudah pengelolaan data dan informasi terkait
                dengan kependudukan dan pendayagunaannya untuk pelayanan publik yang efektif dan efisien.
            </p>

            {/* GRID */}
            <div className="grid md:grid-cols-2 gap-6">

                {data.map((item, index) => (
                    <div key={index} className="flex gap-2">

                        {/* ANGKA */}
                        <div className="bg-[#6EA1DF] text-black font-bold px-6 h-[58px] flex items-center justify-center rounded-[10px] min-w-[120px] text-lg">
                            {item.value}
                        </div>

                        {/* LABEL */}
                        <div className="bg-gray-300 px-6 h-[58px] flex items-center rounded-[10px] w-full font-medium">
                            {item.label}
                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
};

export default Administrasi;