import React from "react";
import { doctors } from "../../data";

const MainSection = () => {
  return (
    <section className="w-full py-20 px-4 md:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
         <header className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-3">
            <span className="text-red-600 font-semibold tracking-wide uppercase">
              Ames Healt
            </span>
            <h2
              id="hair-transplant-title"
              className="text-2xl md:text-3xl font-bold text-gray-900"
            >
              Doktorlarımız
            </h2>
          </div>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-xl p-6 flex flex-col items-center text-center transform hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              <div className="relative w-32 h-32 mb-4">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full rounded-full object-cover shadow-lg"
                />
              </div>
              <h3 className="text-md font-semibold text-gray-900 mb-1">
                {doctor.name}
              </h3>
              <span className="text-gray-900 text-sm mb-3">{doctor.specialty}</span>
              <a
                href={`/kurumsal/doktorlarimiz/${doctor.id}`}
                className="mt-auto inline-block bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-950 transition-colors"
              >
                Detayları Gör
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainSection;
