import React from "react";
import { about } from "../../data";

const MainSection = () => {
  return (
    <section className="py-20 px-4 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <header className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-3">
            <span className="text-red-600 font-semibold tracking-wide uppercase">
              Ames Healt
            </span>
            <h2
              id="hair-transplant-title"
              className="text-2xl md:text-3xl font-bold text-gray-900"
            >
              Hakkımızda
            </h2>
          </div>
        </header>
        <div className="space-y-12 mt-15">
          {about.map((item, index) => (
            <div key={index}>
              <h3 className="text-3xl font-semibold text-gray-900 mb-4 border-l-4 border-gray-950 pl-4">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainSection;
