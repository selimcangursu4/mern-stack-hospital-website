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

const HeroSection = () => {
  const slides = [
    {
      title: "Plastik Cerrahi",
      subtitle: "Doğal ve estetik bir görünüm için güvenilir cerrahi çözümler.",
      img: PlastikCerrahiBg,
    },
    {
      title: "Saç Ekimi",
      subtitle: "Doğal sonuçlarla kalıcı ve yoğun saç görünümü.",
      img: SacEkimiBg,
    },
    {
      title: "Medikal Estetik",
      subtitle: "Cerrahi gerektirmeden gençleşmenin en modern yolu.",
      img: MedikalEstetikBg,
    },
    {
      title: "Diş Estetik",
      subtitle: "Gülüşünüzü yeniden tasarlayan estetik diş çözümleri.",
      img: DisEstetigi	,
    },
    {
      title: "Penis Estetik",
      subtitle: "Erkek sağlığı için güvenli ve modern estetik çözümler.",
      img: PenisEstetigi,
    },
  ];

  return (
    <section className="w-full h-[600px] md:h-[650px] relative">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3500 }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.img}
                className="w-full h-full object-cover"
                alt="hero"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-20 text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>

                <p className="text-lg md:text-xl font-light mb-6 max-w-lg drop-shadow">
                  {slide.subtitle}
                </p>
                <div className="flex flex-row items-center gap-4">
                  <button className="px-6 py-3 bg-gray-900 hover:bg-gray-950 rounded-md text-white text-sm cursor-pointer shadow-md flex flex-row items-center gap-1 transition">
                    <IoIosInformationCircleOutline /> Detaylı Bilgi
                  </button>

                  <button className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-md text-white text-sm shadow-md cursor-pointer transition flex flex-row items-center gap-1">
                    <FaWhatsapp /> WhatsApp Hattı
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
