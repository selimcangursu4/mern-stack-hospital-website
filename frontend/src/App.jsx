import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import ServiceDetail from './pages/ServiceDetail'
import About from './pages/About';
import Doctors from "./pages/Doctors"
import DoctorDetail from "./pages/DoctorDetail"

function App() {

  return (
     <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plastik-cerrahi/:slug" element={<ServiceDetail />} />
        <Route path="/sac-ekimi/:slug" element={<ServiceDetail />} />
        <Route path="/medikal-estetik/:slug" element={<ServiceDetail />} />
        <Route path="/dis-estetigi/:slug" element={<ServiceDetail />} />
        <Route path="/penis-estetigi/:slug" element={<ServiceDetail />} />
        <Route path="/kurumsal/hakkimizda" element={<About />} />
        <Route path="/kurumsal/doktorlarimiz" element={<Doctors />} />
        <Route path="/kurumsal/doktorlarimiz/:doctor_id" element={<DoctorDetail />} />
    

      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
