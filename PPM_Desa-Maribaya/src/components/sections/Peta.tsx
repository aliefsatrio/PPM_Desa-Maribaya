import React from "react";

const Peta: React.FC = () => {
    return (
        <section className="px-6 md:px-20 py-20 bg-white">

            <h2 className="text-4xl font-bold mb-8">
                PETA DESA
            </h2>

            <div className="w-full h-400px rounded-lg overflow-hidden flex flex-2 gap-4 justify-center items-center">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.587864606005!2d109.21299534274577!3d-6.87298808638169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fc7da992c7d47%3A0x5027a76e3566520!2sMaribaya%2C%20Kec.%20Kramat%2C%20Kabupaten%20Tegal%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1777291485917!5m2!1sid!2sid"
                    width="500px"
                    height="500px"
                    style={{ border: 0 }}
                    loading="lazy"
                ></iframe>
                <h2 className="text-2xl font-semibold mt-3 w-1/2 text-center text-gray-400">
                    Batas-batas dari Desa Maribaya, Kecamatan Kramat, Kabupaten Tegal, Jawa Tengah
                </h2>
            </div>

        </section>
    );
};

export default Peta;