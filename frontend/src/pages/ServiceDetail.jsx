import React from "react";
import { useParams } from "react-router-dom";
import { services } from "../data";
import Webform from "../components/Webform";

const ServiceDetail = () => {
  const { slug } = useParams();

  const service = services.find((item) => item.slug == slug);

  return (
    <>
      <section className="py-20 px-4 md:px-20 max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {service.name}
        </h1>
        {service.image && (
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        )}
        <p className="text-gray-700 leading-relaxed">{service.content}</p>
      </section>
      <Webform />
    </>
  );
};

export default ServiceDetail;
