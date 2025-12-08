import React from "react";
import { awards } from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const AwardsSection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-20 bg-gray-50">
      {/* Header */}
      <header className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
        <div className="flex flex-col gap-3">
          <span className="text-red-600 font-semibold tracking-wide uppercase">
            Aldığımız Ödüller
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Estetik ve sağlık alanında kazandığımız prestijli ödüllerimiz
          </h2>
        </div>
      </header>

      {/* Slider */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={24}
        loop
        autoplay={{ delay: 4000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {awards.map((award) => (
          <SwiperSlide key={award.id}>
            <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl hover:shadow-md border border-gray-200 transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-4 shadow-inner">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-md md:text-md font-bold text-gray-900 mb-1">
                {award.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{award.organization}</p>
              <span className="text-xs text-gray-400">{award.year}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AwardsSection;
