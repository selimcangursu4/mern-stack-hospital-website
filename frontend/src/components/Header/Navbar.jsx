import React from 'react'
import { mainMenus } from "../../menu";

const Navbar = () => {
  return (
    <header className="w-full flex flex-row justify-between items-center p-3">
         <img src="" alt="mern-stack-hospital-logo" />
   
         <nav>
           <ul className="flex flex-row items-center gap-3">
             {mainMenus.map((menu, index) => (
               <li key={index}>
                 <a href={menu.link}>{menu.name}</a>
               </li>
             ))}
           </ul>
         </nav>
       </header>
  )
}

export default Navbar
