import React from "react";

const Tentang: React.FC = () => {
  return (
    <section className="px-6 md:px-20 py-20 bg-white">

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            JELAJAHI DESA
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
            Melalui website ini Anda dapat menjelajahi segala hal
            yang terkait dengan Desa. Aspek pemerintahan,
            penduduk, demografi, potensi Desa, dan juga berita
            tentang Desa.
          </p>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="w-[300px] md:w-[400px] lg:w-[500px] aspect-square bg-gray-300 rounded">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Foto desa
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Tentang;