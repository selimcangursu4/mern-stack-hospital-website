import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import PlastikCerrahiBg from "../../assets/anasayfa-medikal-estetik.jpg";
import SacEkimiBg from "../../assets/anasayfa-sac-estetigi.jpg";
import MedikalEstetikBg from "../../assets/anasayfa-plastik-cerrahi-estetik.jpg";
import DisEstetigi from "../../assets/anasayfa-dis-estetigi.jpg";
import PenisEstetigi from "../../assets/anasayfa-penis-estetigi.jpg";

import "swiper/css";

import { FaWhatsapp } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

const slides = [
  {
    title: "Plastik Cerrahi",
    subtitle: "Doğal ve estetik bir görünüm için güvenilir cerrahi çözümler.",
    img: PlastikCerrahiBg,
    alt: "Plastik cerrahi estetik görseli",
  },
  {
    title: "Saç Ekimi",
    subtitle: "Doğal sonuçlarla kalıcı ve yoğun saç görünümü.",
    img: SacEkimiBg,
    alt: "Saç ekimi operasyonu görseli",
  },
  {
    title: "Medikal Estetik",
    subtitle: "Cerrahi gerektirmeden gençleşmenin en modern yolu.",
    img: MedikalEstetikBg,
    alt: "Medikal estetik tedavisi görseli",
  },
  {
    title: "Diş Estetik",
    subtitle: "Gülüşünüzü yeniden tasarlayan estetik diş çözümleri.",
    img: DisEstetigi,
    alt: "Diş estetiği tedavisi görseli",
  },
  {
    title: "Penis Estetik",
    subtitle: "Erkek sağlığı için güvenli ve modern estetik çözümler.",
    img: PenisEstetigi,
    alt: "Erkek sağlığı estetik hizmeti görseli",
  },
];

const FloatingInput = ({ label, type }) => (
  <div className="relative group">
    <input
      type={type}
      required
      aria-label={label}
      className="w-full bg-white/10 text-white px-4 py-3 rounded-lg border border-white/30
      focus:border-gray-300 outline-none transition-all duration-200 peer placeholder-transparent"
      placeholder={label}
    />
    <label
      className="absolute left-4 top-3 text-white/70 transition-all duration-200
      peer-focus:top-[-12px] peer-focus:text-sm peer-focus:text-gray-200
      peer-valid:top-[-12px] peer-valid:text-sm peer-valid:text-gray-200"
    >
      {label}
    </label>
  </div>
);

const FloatingSelect = ({ label, options }) => (
  <div className="relative group">
    <select
      required
      aria-label={label}
      defaultValue=""
      className="w-full bg-white/10 text-white px-4 py-3 rounded-lg border border-white/30
      focus:border-gray-300 outline-none transition-all duration-200 peer cursor-pointer"
    >
      <option disabled hidden value=""></option>
      {options.map((opt, i) => (
        <option key={i} value={opt}>{opt}</option>
      ))}
    </select>

    <label
      className="absolute left-4 top-3 text-white/70 transition-all duration-200
      peer-focus:top-[-12px] peer-focus:text-sm peer-focus:text-gray-200
      peer-valid:top-[-12px] peer-valid:text-sm peer-valid:text-gray-200"
    >
      {label}
    </label>
  </div>
);

const HeroSection = () => {
  return (
    <section
      className="w-full h-[650px] relative select-none"
      aria-label="Ana sayfa hero bölümü"
    >
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 6000 }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <article className="relative w-full h-full">
              <img
                src={slide.img}
                loading="lazy"
                alt={slide.alt}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

              <div className="absolute inset-0 flex flex-col md:flex-row justify-between items-center px-6 md:px-20">

                <header className="flex flex-col justify-center text-white max-w-xl">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {slide.title}
                  </h1>

                  <p className="text-lg md:text-xl font-light mb-6">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-row gap-3">
                    <button
                      className="px-6 py-3 bg-gray-900 hover:bg-gray-950 rounded-md text-white text-sm shadow-md flex items-center gap-2 transition"
                      aria-label="Detaylı bilgi al"
                    >
                      <IoIosInformationCircleOutline size={20} />
                      Detaylı Bilgi
                    </button>

                    <button
                      className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-md text-white text-sm shadow-md flex items-center gap-2 transition"
                      aria-label="WhatsApp üzerinden iletişim kur"
                    >
                      <FaWhatsapp size={20} />
                      WhatsApp
                    </button>
                  </div>
                </header>

                {/* Right: Form */}
                <aside className="hidden md:block backdrop-blur-xl bg-white/20 border border-white/30 p-6 rounded-2xl shadow-2xl w-[330px] animate-fadeIn">
                  <h2 className="text-2xl font-semibold mb-4 text-white">
                    Hemen Form Bırakın!
                  </h2>

                  <form className="flex flex-col gap-5">
                    <FloatingInput type="text" label="Ad Soyad" />
                    <FloatingInput type="tel" label="Telefon" />

                    <FloatingSelect
                      label="İlgilendiğiniz Hizmet"
                      options={[
                        "Plastik Cerrahi",
                        "Saç Ekimi",
                        "Medikal Estetik",
                        "Diş Estetiği",
                        "Penis Estetiği",
                      ]}
                    />

                    <button
                      type="submit"
                      aria-label="Formu gönder"
                      className="bg-gray-900 text-white py-3 rounded-lg shadow-lg hover:shadow-gray-950 transition-all"
                    >
                      Gönder
                    </button>
                  </form>
                </aside>

              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
