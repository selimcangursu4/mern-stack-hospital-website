import React from "react";
import {
  CiLocationOn,
  CiPhone,
  CiFacebook,
  CiInstagram,
  CiTwitter,
  CiYoutube,
} from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { about, socialMedia } from "../../about";

const TopHeader = () => {
  return (
    <div className="hidden md:flex w-full justify-between items-center bg-blue-950 text-white px-6 py-2 text-sm">
      <ul className="flex items-center gap-6">
        <li className="flex items-center gap-1">
          <CiLocationOn className="text-lg" /> {about.address}
        </li>

        <li>
          <a className="flex items-center gap-1 hover:text-blue-300" href={`tel:${about.phone}`}>
            <CiPhone className="text-lg" /> {about.phone}
          </a>
        </li>

        <li>
          <a
            href={about.whatsaapHref}
            target="_blank"
            className="flex items-center gap-1 hover:text-green-400"
          >
            <FaWhatsapp className="text-lg" /> WhatsApp'tan Ulaş
          </a>
        </li>
      </ul>
      <ul className="flex items-center gap-4">
        <a href={socialMedia.facebook} className="text-lg hover:text-blue-400">
          <CiFacebook />
        </a>
        <a href={socialMedia.instagram} className="text-lg hover:text-pink-400">
          <CiInstagram />
        </a>
        <a href={socialMedia.twitter} className="text-lg hover:text-blue-300">
          <CiTwitter />
        </a>
        <a href={socialMedia.youtube} className="text-lg hover:text-red-500">
          <CiYoutube />
        </a>
      </ul>
    </div>
  );
};

export default TopHeader;
