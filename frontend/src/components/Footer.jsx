import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { about } from "../data";

const Footer = () => {
  const info = about[0];

  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Hakkımızda</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {info.content}
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Hızlı Linkler</h3>
          <ul className="flex flex-col gap-2 text-gray-400 text-sm">
            <li>
              <a
                href="/kurumsal/hakkimizda"
                className="hover:text-red-600 transition"
              >
                Hakkımızda
              </a>
            </li>
            <li>
              <a
                href="/kurumsal/doktorlarimiz"
                className="hover:text-red-600 transition"
              >
                Doktorlarımız
              </a>
            </li>
            <li>
              <a href="/iletisim" className="hover:text-red-600 transition">
                İletişim
              </a>
            </li>
           
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-4">İletişim</h3>
          <ul className="text-gray-400 text-sm flex flex-col gap-2">
            <li>Adres: {info.address}</li>
            <li>Telefon: {info.phone}</li>
            <li>Email: info@ames.com</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Bizi Takip Edin</h3>
          <div className="flex gap-4 text-lg">
            {info.facebook && (
              <a
                href={info.facebook}
                target="_blank"
                className="text-gray-400 hover:text-red-600 transition"
              >
                <FaFacebookF />
              </a>
            )}

            {info.instagram && (
              <a
                href={info.instagram}
                target="_blank"
                className="text-gray-400 hover:text-red-600 transition"
              >
                <FaInstagram />
              </a>
            )}

            {info.twitter && (
              <a
                href={info.twitter}
                target="_blank"
                className="text-gray-400 hover:text-red-600 transition"
              >
                <FaTwitter />
              </a>
            )}

            {info.youtube && (
              <a
                href={info.youtube}
                target="_blank"
                className="text-gray-400 hover:text-red-600 transition"
              >
                <FaYoutube />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Alt Bilgi */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} {info.company_name}. Tüm hakları
        saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
