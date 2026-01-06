
import React, { useEffect, useState } from 'react';
import Timer from './components/Timer';
import Hero from './components/Hero';
import Brokers from './components/Brokers';
import IndicatorSection from './components/IndicatorSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppPopup from './components/WhatsAppPopup';
import { initPixel } from './services/analytics';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    initPixel();

    // Simulate resource pre-fetching or wait for window load
    const handleLoad = () => setTimeout(() => setIsLoaded(true), 800);
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <div className="min-h-screen selection:bg-yellow-500 selection:text-black bg-[#050505]">
      {/* Splash Screen */}
      <div className={`fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center transition-opacity duration-1000 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
         <div className="relative">
           <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-yellow-500/20 p-2 animate-pulse">
             <img 
               src="https://i.ibb.co/h1LRKw3z/Screenshot-2025-12-30-111039.png" 
               className="w-full h-full object-cover rounded-full grayscale opacity-50"
               alt="Preloader"
             />
           </div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-yellow-500/5 blur-3xl rounded-full"></div>
         </div>
         <p className="mt-8 text-yellow-500/40 text-[10px] uppercase font-black tracking-[1em] animate-pulse">Initializing Terminal</p>
      </div>

      <div className={`transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Timer />
        <main>
          <div className="animate-reveal" style={{ animationDelay: '200ms' }}>
            <Hero />
          </div>
          <div className="animate-reveal" style={{ animationDelay: '400ms' }}>
            <IndicatorSection />
          </div>
          <div className="animate-reveal" style={{ animationDelay: '600ms' }}>
            <Brokers />
          </div>
          <div className="animate-reveal" style={{ animationDelay: '800ms' }}>
            <ContactForm />
          </div>
        </main>
        <Footer />
        <WhatsAppPopup />
      </div>
    </div>
  );
};

export default App;
