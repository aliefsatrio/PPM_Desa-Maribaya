import React from "react";
import baldes from "../../assets/baldes.png";

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
          <div className="w-250px md:w-300px lg:w-500px rounded-lg overflow-hidden shadow-lg">
            <div className="w-full h-full flex items-center justify-center">
              <img src={baldes} alt="Foto Desa" />
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Tentang;