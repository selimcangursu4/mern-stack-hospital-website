import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { blogs } from "../../data";

const BlogSection = () => {
  return (
    <section className="w-full bg-gray-50 py-14 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <header className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-3">
            <span className="text-red-600 font-semibold tracking-wide uppercase">
              Bloglarımız
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Tüm Bloglarımız
            </h2>
          </div>
        </header>
        <div>
            <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={24}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
          loop
          autoplay={{ delay: 4000 }}
          className="h-full"
          aria-label="Bloglar slider"
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <article className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full">
                <figure className="w-full h-48">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="p-5 flex flex-col gap-3 flex-grow">
                  <h3 className="text-gray-900 font-semibold text-md">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {blog.summary}
                  </p>

                  <a
                    href={blog.link}
                    className="mt-auto bg-gray-900 text-white text-sm py-2 rounded-md text-center hover:bg-gray-800 transition"
                    aria-label={`${blog.title} detaylarını incele`}
                  >
                    Detaylı İncele
                  </a>
                </div>
                <div className="px-5 py-3 border-t border-gray-200 text-gray-500 text-xs flex justify-between items-center">
                  <span>{blog.author}</span>
                  <time dateTime={blog.date}>{blog.date}</time>
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

export default BlogSection;
