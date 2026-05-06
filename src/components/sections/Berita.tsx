import React from "react";
import { beritaData } from "../../data/berita";

const Berita: React.FC = () => {
    return (
        <section className="px-6 md:px-20 py-20 bg-white">

            <div className="max-w-7xl mx-auto">

                {/* TITLE */}
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    Berita Desa
                </h2>

                <p className="text-gray-600 mb-10 max-w-xl">
                    Menyajikan informasi terbaru tentang peristiwa, berita terkini, dan artikel-artikel dari desa.
                </p>

                {/* GRID */}
                <div className="grid md:grid-cols-3 gap-6">

                    {beritaData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1 cursor-pointer"
                        >

                            {/* IMAGE */}
                            <div className="h-200px w-full overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                                />
                            </div>

                            {/* CONTENT */}
                            <div className="p-4">

                                <p className="text-sm text-gray-500 mb-1">
                                    {item.date}
                                </p>

                                <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 text-sm line-clamp-3">
                                    {item.desc}
                                </p>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default Berita;