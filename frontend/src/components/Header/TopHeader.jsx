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
import {about , socialMedia} from '../../about'

const TopHeader = () => {
  return (
    <div className="hidden w-full md:flex flex-row justify-between items-center text-white bg-blue-950 p-2 text-sm">
      <ul className="flex flex-row items-center gap-3">
        <li>
          <span className="flex flex-row gap-1 items-center">
            <CiLocationOn /> {about.address}
          </span>
        </li>
        <li>
          <a className="flex flex-row items-center gap-1" href="">
            <CiPhone /> {about.phone}
          </a>
        </li>
        <li>
          <a href={about.whatsaapHref} className="flex flex-row items-center gap-1">
            <FaWhatsapp /> Whatsaaptan Ulaş
          </a>
        </li>
      </ul>
      <ul className="flex flex-row items-center gap-3">
        <li>
          <a className="text-lg" href={socialMedia.facebook}>
            <CiFacebook />
          </a>
        </li>
        <li>
          <a className="text-lg" href={socialMedia.instagram}>
            <CiInstagram />
          </a>
        </li>
        <li>
          <a className="text-lg" href={socialMedia.twitter}>
            <CiTwitter />
          </a>
        </li>
        <li>
          <a className="text-lg" href={socialMedia.youtube}>
            <CiYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TopHeader;
