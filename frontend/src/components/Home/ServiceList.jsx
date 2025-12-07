import React from 'react';
import HomeServiceCard from '../../components/HomeServiceCard';
import { mainMenus } from '../../menu.js';

const ServiceList = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-5 gap-2 px-1 md:px-10 p-3 bg-gray-50">
      {mainMenus
        .filter((item) => item.homeİsView === true)
        .map((item) => (
          <HomeServiceCard key={item.id} state={item} />
        ))}
    </section>
  );
};

export default ServiceList;
