import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logo from './assets/ames-logo.png'

// Lazy components
const Header = lazy(() => import("./components/Header/Header"));
const Footer = lazy(() => import("./components/Footer"));
const Home = lazy(() => import("./pages/Home"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const About = lazy(() => import("./pages/About"));
const Doctors = lazy(() => import("./pages/Doctors"));
const DoctorDetail = lazy(() => import("./pages/DoctorDetail"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <img src={Logo} alt="Ames Health" className="w-40 animate-pulse" />
          </div>
        }
      >
        <Header />
      </Suspense>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <img src={Logo} alt="Ames Health" className="w-40 animate-pulse" />
          </div>
        }
      >
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
          <Route path="/iletisim" element={<Contact />} />
        </Routes>
      </Suspense>
      <Suspense
        fallback={
          <div className="flex justify-center items-center py-10">
            <img src={Logo} alt="Ames Health" className="w-32 animate-pulse" />
          </div>
        }
      >
        <Footer />
      </Suspense>

    </BrowserRouter>
  );
}

export default App;
