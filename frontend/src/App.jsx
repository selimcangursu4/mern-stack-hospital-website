import { useState } from 'react'
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import ServiceDetail from './pages/ServiceDetail'


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
      </Routes>
    </BrowserRouter>
  )
}

export default App
