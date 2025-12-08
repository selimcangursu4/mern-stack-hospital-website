import React from "react";
import { about } from "../data";

const Contact = () => {
  // about dizisinin ilk elemanındaki iletişim bilgilerini alıyoruz
  const contactInfo = about[0];

  return (
    <section className="w-full py-20 px-4 md:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* İletişim Bilgileri */}
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-bold text-gray-900">Bize Ulaşın</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Sorularınız, randevu talepleriniz veya önerileriniz için bizimle
            iletişime geçebilirsiniz. Size en kısa sürede geri dönüş yapacağız.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900">Adres</h3>
              <p className="text-gray-600">{contactInfo.address}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Telefon</h3>
              <p className="text-gray-600">{contactInfo.phone}</p>
            </div>

            <div className="flex gap-4 mt-4">
              {contactInfo.facebook && (
                <a
                  href={contactInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-blue-600 transition-colors"
                >
                  Facebook
                </a>
              )}
              {contactInfo.instagram && (
                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-pink-500 transition-colors"
                >
                  Instagram
                </a>
              )}
              {contactInfo.youtube && (
                <a
                  href={contactInfo.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-red-600 transition-colors"
                >
                  YouTube
                </a>
              )}
              {contactInfo.twitter && (
                <a
                  href={contactInfo.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-blue-400 transition-colors"
                >
                  Twitter
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form className="flex flex-col gap-4">
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="name"
              >
                Adınız
              </label>
              <input
                type="text"
                id="name"
                placeholder="Adınızı girin"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                E-posta
              </label>
              <input
                type="email"
                id="email"
                placeholder="E-posta adresinizi girin"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="message"
              >
                Mesajınız
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Mesajınızı yazın"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gray-900 text-white p-2 rounded-lg hover:bg-gray-950 transition-colors"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
