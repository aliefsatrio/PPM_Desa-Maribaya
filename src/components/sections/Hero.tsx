import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Headphones } from "lucide-react";

import hero1 from "../../assets/Hero1.webp";
import hero2 from "../../assets/Hero2.webp";
import hero3 from "../../assets/Hero3.webp";

const Hero: React.FC = () => {
  const images = [hero1, hero2, hero3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    // PERBAIKAN 1: h-600px tidak valid di Tailwind. Ubah menjadi h-[600px] atau gunakan vh.
    // Ditambahkan pt-20 (padding-top) agar konten tidak tertutup Navbar yang fixed.
    <section className="relative h-[80vh] md:h-150 w-full overflow-hidden flex items-center justify-center pt-20">
      
      {/* SLIDE IMAGES */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-0" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* OVERLAY */}
      {/* PERBAIKAN 2: Overlay dibuat sedikit lebih gelap (bg-black/50) agar teks putih lebih kontras */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* TEXT */}
      {/* PERBAIKAN 3: Menambahkan drop-shadow dan max-w agar teks lebih rapi */}
      <div className="relative z-20 text-center text-white px-6 max-w-4xl drop-shadow-lg">
        <h1 className="text-2xl md:text-3xl font-medium mb-3 tracking-wide">
          Selamat Datang
        </h1>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
          Website Resmi Desa Maribaya
        </h2>
        <p className="text-base md:text-lg opacity-90 font-light">
          Sumber Informasi terbaru Pemerintahan di Desa Maribaya
        </p>
      </div>

      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 border border-white/50 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-white hover:text-black transition-all z-20"
      >
        <ArrowLeft size={20} />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 border border-white/50 text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-white hover:text-black transition-all z-20"
      >
        <ArrowRight size={20} />
      </button>

      {/* DOTS */}
      {/* PERBAIKAN 4: Membuat dot bisa diklik dan ukurannya lebih proporsional */}
      <div className="absolute bottom-8 flex gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-8 bg-white" : "w-4 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* BUTTON PENGADUAN */}
      {/* PERBAIKAN 5: Posisi dibuat responsif agar tidak menabrak panah kanan di layar kecil */}
      <button className="absolute top-24 md:top-auto md:bottom-8 right-4 md:right-8 bg-blue-600 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 z-20 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all font-medium">
        <Headphones size={18} />
        Pengaduan
      </button>
    </section>
  );
};

export default Hero;