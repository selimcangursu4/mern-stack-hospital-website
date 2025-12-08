import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaWhatsapp } from "react-icons/fa";
import { subCategories } from "../../menu";

const ServiceSection = ({category_name,category_slogan,category_id}) => {
  return (
      <section
        className="w-full bg-gray-50 py-14 px-4 md:px-20"
        aria-labelledby="hair-transplant-title"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <header className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-3">
              <span className="text-red-600 font-semibold tracking-wide uppercase">
                {category_slogan}
              </span>
              <h2
                id="hair-transplant-title"
                className="text-2xl md:text-3xl font-bold text-gray-900"
              >
               {category_name}
              </h2>
            </div>
  
            <div className="flex flex-col gap-4 text-gray-700 leading-relaxed">
              <p className="text-base md:text-lg">
                En doğal ve yoğun görünüme ulaşabilmeniz için kişiye özel saç
                ekimi çözümleri sunuyoruz. Uzman kadromuzla profesyonel bir saç
                ekimi deneyimi yaşayarak özgüveninizi geri kazanın.
              </p>
  
              <a
                href="https://wa.me/905XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Hattı ile İletişime Geç"
                className="w-fit text-sm cursor-pointer px-4 py-3 bg-green-700 hover:bg-green-800 flex flex-row items-center gap-2 transition text-white rounded-md shadow-md"
              >
                <FaWhatsapp className="text-lg" /> WhatsApp Hattı
              </a>
            </div>
          </header>
  
          <div>
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              spaceBetween={24}
              breakpoints={{
                480: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              loop
              autoplay={{ delay: 4000 }}
              className="h-full"
              aria-label="Saç ekimi alt kategori slider"
            >
              {subCategories
                .filter((item) => item.main_category == category_id)
                .map((item) => (
                  <SwiperSlide key={item.id}>
                    <article className="bg-white hover:shadow-xl transition-shadow rounded-xl overflow-hidden flex flex-col h-full">
                      <figure className="w-full h-48">
                        <img
                          src={item.image}
                          alt={`${item.name} - saç ekimi hizmeti`}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </figure>
  
                      <div className="p-5 flex flex-col gap-3 flex-grow">
                        <h3 className="text-gray-900 font-semibold text-lg">
                          {item.name}
                        </h3>
  
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                          {item.description}
                        </p>
  
                        <a
                          href={item.link}
                          className="mt-auto bg-gray-900 text-white text-sm py-2 rounded-md text-center hover:bg-gray-800 transition"
                          aria-label={`${item.name} detaylarını incele`}
                        >
                          Detaylı İncele
                        </a>
                      </div>
                    </article>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </section>
  )
}

export default ServiceSection
