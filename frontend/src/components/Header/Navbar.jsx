import React, { useState } from "react";
import { mainMenus } from "../../menu";
import { about } from "../../about";
import { CiHeadphones } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full  shadow-sm bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        <img
          src="/logo.png"
          alt="hospital-logo"
          className="w-32 object-contain"
        />
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6 font-medium text-gray-700">
            {mainMenus.map((menu, index) => (
              <li key={index}>
                <a href={menu.link} className="hover:text-gray-900 transition">
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:flex flex-col items-end">
          <small className="text-red-700 font-semibold flex items-center gap-1">
            <CiHeadphones /> Çağrı Merkezi
          </small>
          <span className="font-semibold text-gray-800">{about.phone}</span>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-gray-700"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          {mainMenus.map((menu, index) => (
            <a
              key={index}
              href={menu.link}
              className="block text-gray-700 text-lg border-b pb-2 hover:text-blue-950"
            >
              {menu.name}
            </a>
          ))}

          <div className="mt-4">
            <small className="flex items-center gap-1 text-red-700 font-semibold">
              <CiHeadphones /> Çağrı Merkezi
            </small>
            <p className="font-semibold text-gray-800">{about.phone}</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
