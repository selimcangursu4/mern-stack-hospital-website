import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import ServiceList from '../components/Home/ServiceList'


 const Home = ()=>{
	return(
		<>
		  <section className="w-full">
			 <HeroSection/>
			 <ServiceList/>
		  </section>
		</>
	)
}	


export default Home;