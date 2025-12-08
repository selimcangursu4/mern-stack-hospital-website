import React from 'react'
import doctorBg from "../../assets/doctorsBg.webp";

const HeroSection = () => {
  return (
     <section
       className="relative w-full h-100 flex justify-center items-center bg-cover bg-center"
       style={{ backgroundImage: `url(${doctorBg})` }}
     >
       <div className="absolute inset-0 bg-black opacity-50"></div>
       <h2 className="relative text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
         Doktorlarımız
       </h2>
     </section>
  )
}

export default HeroSection
