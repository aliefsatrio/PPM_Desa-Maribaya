import React from "react";

const Sambutan: React.FC = () => {
  return (
    <section className="px-6 md:px-20 py-20 bg-white">

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <div className="flex justify-center md:justify-start">
          <div className="w-300px md:w-400px lg:w-500px aspect-square bg-gray-300 rounded">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Logo desa
            </div>
          </div>
        </div>

        {/* TEXT */}
        <div>
          <h2 className="text-4xl font-bold">
            Sambutan Kepala Desa
          </h2>

          <h3 className="text-2xl font-semibold mt-3">
            Nama kepala desa
          </h3>

          <p className="text-gray-600 mt-3 text-lg">
            sambutan singkat kata kata dari kades
          </p>
        </div>

      </div>

    </section>
  );
};

export default Sambutan;