import React from "react";
import logo from "../../assets/download.png"; 
const Sambutan: React.FC = () => {
  return (
    <section className="px-6 md:px-20 py-20 bg-white">

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <div className="flex justify-center md:justify-start ml-20">
          <div className="w-300px md:w-400px lg:w-500px aspect-square rounded">
            <div className="w-full h-full  flex items-center justify-center text-gray-500">
              <img src={logo} alt="Logo Desa" />
            </div>
          </div>
        </div>

        {/* TEXT */}
        <div>
          <h2 className="text-4xl font-bold">
            Sambutan Kepala Desa
          </h2>

          <h3 className="text-2xl font-semibold mt-3">
            Andi Mijaya
          </h3>

          <p className="text-gray-600 mt-3 text-lg text-justify">
            Kami siap memberikan pelayanan terbaik bagi masyarakat Desa Maribaya. Dengan adanya sistem digital ini, kami berharap dapat mempermudah pengelolaan data dan informasi terkait kependudukan serta meningkatkan pelayanan publik yang efektif dan efisien.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Sambutan;