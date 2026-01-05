
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 md:py-24 text-center border-t border-gray-900 px-6 bg-[#030303]">
      <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
        <div className="flex justify-center mb-4 md:mb-8">
          <div className="h-16 w-16 md:h-24 md:w-24 rounded-full border border-yellow-500/20 overflow-hidden bg-black p-0.5 opacity-60 hover:opacity-100 transition-all">
            <img 
              src="https://i.ibb.co/h1LRKw3z/Screenshot-2025-12-30-111039.png" 
              alt="TOP 1% CLUB FX Logo Footer" 
              className="h-full w-full object-cover rounded-full render-hd"
              loading="lazy"
              decoding="async"
              width="96"
              height="96"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-[9px] md:text-[10px] font-bold text-gray-600 uppercase tracking-widest">
          <a href="#" className="hover:text-yellow-500 transition-colors">Risk Policy</a>
          <a href="#" className="hover:text-yellow-500 transition-colors">Privacy</a>
          <a href="#" className="hover:text-yellow-500 transition-colors">Terms</a>
          <a href="#" className="hover:text-yellow-500 transition-colors">Support</a>
        </div>
        <div className="space-y-4 md:space-y-6">
          <p className="text-gray-700 text-[8px] md:text-[10px] uppercase tracking-widest leading-relaxed max-w-2xl mx-auto">
            Risk Warning: Trading Forex on margin carries a high level of risk. 
            Content is educational only.
          </p>
          <div className="bg-red-900/5 border border-red-900/10 py-3 px-4 rounded-lg inline-block">
             <p className="text-red-900/60 text-[8px] md:text-[10px] font-black uppercase tracking-widest">
               ⚠️ NOT SEBI REGISTERED
             </p>
          </div>
          <p className="text-gray-800 text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] pt-4 md:pt-8">
            &copy; {new Date().getFullYear()} THE ELITE INSTITUTIONAL NETWORK
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
