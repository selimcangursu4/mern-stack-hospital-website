import React, { useState } from "react";
import { mainMenus, subCategories } from "../../menu";
import { about } from "../../about";
import { CiHeadphones } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";
import AmesLogo from '../../assets/ames-logo.png'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  return (
    <header className="w-full shadow-sm bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        <img
          src={AmesLogo}
          alt="hospital-logo"
          className="w-32 object-contain"
        />
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6 font-medium text-gray-700">
            {mainMenus.map((menu) => {
              const subMenu = subCategories.filter(
                (sub) => sub.main_category === menu.id
              );

              return (
                <li key={menu.id} className="relative group">
                  <a
                    href={menu.link}
                    className="hover:text-gray-900 transition"
                  >
                    {menu.name}
                  </a>
                  {subMenu.length > 0 && (
                    <ul className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      {subMenu.map((sub) => (
                        <li key={sub.id} className=" last:border-b-0">
                          <a
                            href={sub.link}
                            className="block px-4 py-2 text-gray-700 text-sm hover:bg-blue-50 hover:text-blue-950 transition"
                          >
                            {sub.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="hidden md:flex flex-col items-end">
          <small className="text-red-700 font-semibold flex items-center gap-1">
            <CiHeadphones /> Çağrı Merkezi
          </small>
          <span className="font-semibold text-gray-800">{about.phone}</span>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-3xl text-gray-700"
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-2">
          {mainMenus.map((menu) => {
            const subMenu = subCategories.filter(
              (sub) => sub.main_category === menu.id
            );
            const isOpen = openSubMenu === menu.id;

            return (
              <div key={menu.id}>
                <button
                  onClick={() =>
                    setOpenSubMenu(isOpen ? null : menu.id)
                  }
                  className="w-full flex justify-between items-center text-gray-700 text-lg font-medium border-b pb-2 hover:text-blue-950 transition"
                >
                  {menu.name}
                  {subMenu.length > 0 && (
                    <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
                  )}
                </button>

                {subMenu.length > 0 && isOpen && (
                  <ul className="pl-4 mt-2 space-y-1">
                    {subMenu.map((sub) => (
                      <li key={sub.id}>
                        <a
                          href={sub.link}
                          className="block text-gray-700 py-1 hover:text-blue-950 transition"
                        >
                          {sub.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
          <div className="mt-4  pt-4">
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
