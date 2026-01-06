
import React, { useEffect } from 'react';
import Timer from './components/Timer';
import Hero from './components/Hero';
import Brokers from './components/Brokers';
import IndicatorSection from './components/IndicatorSection';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppPopup from './components/WhatsAppPopup';

const App: React.FC = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen selection:bg-yellow-500 selection:text-black bg-[#050505]">
      <Timer />
      <main>
        <Hero />
        <IndicatorSection />
        <Brokers />
        <Gallery />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppPopup />
    </div>
  );
};

export default App;
