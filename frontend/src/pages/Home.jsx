import React from "react";
import HeroSection from "../components/Home/HeroSection";
import ServiceList from "../components/Home/ServiceList";
import AboutSection from "../components/Home/AboutSection";
import ServiceSection from "../components/Home/ServiceSection";
import Webform from "../components/Webform";
import GoogleReviewsSection from "../components/Home/GoogleReviewsSection";
import AwardsSection from "../components/Home/AwardsSection";
const Home = () => {
  return (
    <>
      <section className="w-full">
        <HeroSection />
        <ServiceList />
        <AboutSection />
        <ServiceSection
          category_name="Saç Ekimi"
          category_slogan="Doğal Saç Ekimi İle Kelliğe Son!"
          category_id="3"
        />
        <Webform />
        <ServiceSection
          category_name="Medikal Estetik"
          category_slogan="Kusursuz, Canlı ve Parlak Bir Cildiniz Olsun!"
          category_id="4"
        />
        <GoogleReviewsSection />
        <ServiceSection
          category_name="Plastik Cerrahi"
          category_slogan="Doğal, estetik ve özgüveninizi artıran sonuçlar için kişiye özel plastik cerrahi çözümleri."
          category_id="2"
        />
        <AwardsSection/>
        <ServiceSection
          category_name="Diş Estetiği"
          category_slogan="Daha beyaz, düzgün ve estetik bir gülüş için modern diş estetiği uygulamaları."
          category_id="5"
        />
        <Webform />
        <ServiceSection
          category_name="Penis Estetiği"
          category_slogan="Erkek sağlığı ve özgüveni için profesyonel ve kişiye özel penis estetiği çözümleri."
          category_id="6"
        />
        blog  <br /> footer
      </section>
    </>
  );
};

export default Home;
