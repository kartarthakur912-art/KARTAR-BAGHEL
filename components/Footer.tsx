
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 text-center border-t border-gray-900 px-6 bg-[#030303]">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-2xl font-black gold-gradient tracking-[0.5em] uppercase">TOP 1% CLUB FX</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
          <a href="#" className="hover:text-yellow-500 transition-colors">Risk Policy</a>
          <a href="#" className="hover:text-yellow-500 transition-colors">Privacy</a>
          <a href="#" className="hover:text-yellow-500 transition-colors">Terms</a>
          <a href="#" className="hover:text-yellow-500 transition-colors">Support</a>
        </div>
        <div className="space-y-6">
          <p className="text-gray-600 text-[10px] uppercase tracking-[0.3em] leading-relaxed max-w-2xl mx-auto">
            Risk Warning: Trading Foreign Exchange (Forex) on margin carries a high level of risk and may not be suitable for all investors. 
            Past performance is not indicative of future results. Content is educational only.
          </p>
          <div className="bg-red-900/10 border border-red-900/20 py-4 px-6 rounded-lg inline-block">
             <p className="text-red-600/80 text-[10px] font-black uppercase tracking-widest">
               ⚠️ NOT SEBI REGISTERED • EDUCATIONAL CONTENT ONLY
             </p>
          </div>
          <p className="text-gray-800 text-[10px] font-black uppercase tracking-[0.6em] pt-8">
            &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED | THE ELITE INSTITUTIONAL NETWORK
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
