import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import ServiceList from '../components/Home/ServiceList'
import AboutSection from '../components/Home/AboutSection'


 const Home = ()=>{
	return(
		<>
		  <section className="w-full">
			 <HeroSection/>
			 <ServiceList/>
			 <AboutSection/>
		  </section>
		</>
	)
}	


export default Home;