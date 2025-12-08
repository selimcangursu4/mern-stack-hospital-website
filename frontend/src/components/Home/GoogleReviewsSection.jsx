import React from "react";
import ReviewsCard from "../ReviewsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { customer_reviews } from "../../data";

const GoogleReviewsSection = () => {
  return (
    <section
      className="w-full bg-gray-50 py-16 px-4 md:px-20"
      aria-labelledby="google-reviews-title"
    >
      <header className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-3">
          <span className="text-red-600 font-semibold tracking-wide uppercase">
            Müşteri Yorumlarımız
          </span>
          <h2
            id="hair-transplant-title"
            className="text-2xl md:text-3xl font-bold text-gray-900"
          >
            Hastalarımızın Deneyimlerine Göz Atın
          </h2>
        </div>
      </header>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={24}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        loop
        autoplay={{ delay: 4000 }}
        className="h-full max-w-7xl mt-5 mx-auto"
        aria-label="Google yorumları slider"
      >
        {customer_reviews.map((item) => (
          <SwiperSlide key={item.id}>
            <ReviewsCard
              platform={item.platform}
              customer_name={item.customer_name}
              customer_message={item.customer_message}
              service_name={item.service_name}
              date={item.date}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default GoogleReviewsSection;
