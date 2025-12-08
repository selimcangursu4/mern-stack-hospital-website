import React from "react";
import { doctors } from "../data";
import { useParams } from "react-router-dom";
import Webform from "../components/Webform";
const DoctorDetail = () => {
  const { doctor_id } = useParams();
  const doctor = doctors.find((item) => item.id == doctor_id);

  return (
    <>
      <section className="w-full py-20 px-4 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto p-8 md:p-16 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-shrink-0">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {doctor.name}
            </h2>
            <span className="text-red-600 font-semibold text-xl">
              {doctor.specialty}
            </span>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              {doctor.bio}
            </p>
          </div>
        </div>
      </section>
      <Webform />
    </>
  );
};

export default DoctorDetail;
