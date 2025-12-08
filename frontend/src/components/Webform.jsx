import React from "react";

const Webform = () => {
  return (
    <section
      className="w-full bg-gray-900 text-white py-16 px-6 md:px-10 flex justify-center"
      aria-labelledby="webform-title"
    >
      <div className="max-w-3xl w-full text-center flex flex-col gap-2">
        <span className="text-red-500 font-semibold tracking-wide uppercase">
          Ames Health
        </span>

        <h2
          id="webform-title"
          className="text-xl md:text-4xl font-bold leading-snug"
        >
          Hemen Bilgi Alın
        </h2>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Genel tedavilerimiz, saç ekimi çözümlerimiz ve uzman doktorlarımız
          hakkında detaylı bilgi almak ister misiniz? Sizin için buradayız.
        </p>

        <div>
          <a
            href="https://wa.me/905XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Hattı ile iletişime geçin"
            className="inline-block mt-2 bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-lg text-white text-sm cursor-pointer shadow-md"
          >
            WhatsApp Hattı
          </a>
        </div>
      </div>
    </section>
  );
};

export default Webform;
