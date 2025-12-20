
import React, { useState } from 'react';
import { VIP_GROUP_LINK } from '../constants';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(VIP_GROUP_LINK);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-600/5 blur-[150px] rounded-full"></div>

      <div className="mb-8 flex items-center gap-2 px-6 py-2 glass rounded-full border-yellow-600/20">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`w-6 h-6 rounded-full border border-black bg-gray-${600 - (i*100)}`}></div>
          ))}
        </div>
        <span className="text-[10px] font-bold tracking-widest text-yellow-500 uppercase">5,482+ Members Active</span>
      </div>

      <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] mb-6">
        TOP 1% <br /><span className="gold-gradient">CLUB FX</span>
      </h1>
      <p className="text-gray-400 text-lg md:text-2xl max-w-2xl mb-12 italic font-light">
        "Stop being the liquidity. Follow the Institutional Banks with Smart Money Concepts."
      </p>

      <div className="flex flex-col md:flex-row gap-4 w-full max-w-md md:max-w-none justify-center items-center relative z-10">
        <a 
          href={VIP_GROUP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold py-6 px-12 rounded-full text-xl md:text-2xl text-black font-black uppercase tracking-tighter shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:scale-105 transition-transform w-full md:w-auto text-center"
        >
          Join VIP WhatsApp — FREE
        </a>
        
        <button 
          onClick={copyLink}
          className="group border-2 border-yellow-600/30 text-yellow-500/80 py-6 px-12 rounded-full text-xl md:text-2xl uppercase font-black hover:bg-yellow-600/10 hover:border-yellow-600 transition-all w-full md:w-auto flex items-center justify-center gap-3"
        >
          {copied ? (
            <span className="text-green-500 animate-pulse">Link Copied!</span>
          ) : (
            <>
              <span>Copy Invite</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 012-2v-8a2 2 0 01-2-2h-8a2 2 0 01-2 2v8a2 2 0 012 2z" />
              </svg>
            </>
          )}
        </button>
      </div>
      
      <div className="mt-12 text-[10px] uppercase tracking-[0.4em] text-gray-600 font-bold animate-pulse">
        Direct Access Available for Limited Time
      </div>
    </section>
  );
};

export default Hero;
