import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Hakkımızda</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Estetik ve sağlık alanında öncü hastanemiz, uzman kadrosu ile kaliteli hizmet sunar. Amacımız sağlıklı ve estetik bir yaşam sağlamaktır.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Hızlı Linkler</h3>
          <ul className="flex flex-col gap-2 text-gray-400 text-sm">
            <li><a href="/hakkimizda" className="hover:text-red-600 transition">Hakkımızda</a></li>
            <li><a href="/hizmetler" className="hover:text-red-600 transition">Hizmetlerimiz</a></li>
            <li><a href="/iletisim" className="hover:text-red-600 transition">İletişim</a></li>
            <li><a href="/blog" className="hover:text-red-600 transition">Blog</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-4">İletişim</h3>
          <ul className="text-gray-400 text-sm flex flex-col gap-2">
            <li>Adres: Örnek Mah. 123, İstanbul, Türkiye</li>
            <li>Telefon: +90 212 000 00 00</li>
            <li>Email: info@ornekhastane.com</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Bizi Takip Edin</h3>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-red-600 transition"><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-red-600 transition"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-red-600 transition"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-red-600 transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Örnek Hastane. Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;
