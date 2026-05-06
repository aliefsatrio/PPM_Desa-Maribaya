import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Headphones } from "lucide-react";

import hero1 from "../../assets/Hero1.webp";
import hero2 from "../../assets/Hero2.webp";
import hero3 from "../../assets/Hero3.webp";

const Hero: React.FC = () => {
  const images = [hero1, hero2, hero3];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-600px overflow-hidden flex items-center justify-center">

      {/* SLIDE IMAGES */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100 z-0" : "opacity-0 z-0"
            }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* TEXT */}
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Selamat Datang
        </h1>

        <h2 className="text-4xl md:text-5xl font-bold mt-2">
          Website Resmi Desa Maribaya
        </h2>

        <p className="text-lg mt-3">
          Sumber Informasi terbaru Pemerintahan di Desa Maribaya
        </p>
      </div>

      {/* LEFT */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 border border-white text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-white/20 z-20"
      >
        <ArrowLeft size={20} />
      </button>

      {/* RIGHT */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 border border-white text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-white/20 z-20"
      >
        <ArrowRight size={20} />
      </button>

      {/* DOT */}
      <div className="absolute bottom-6 flex gap-2 z-20">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-8 h-1 rounded transition-all ${index === currentIndex
                ? "bg-white"
                : "bg-white/40"
              }`}
          />
        ))}
      </div>

      {/* BUTTON */}
      <button className="absolute bottom-6 right-6 bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2 z-20 hover:bg-blue-800 transition">
        <Headphones size={18} />
        Pengaduan
      </button>
    </section>
  );
};

export default Hero;