
import React, { useState } from 'react';
import { VIP_GROUP_LINK } from '../constants';
import { trackLead } from '../services/analytics';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(VIP_GROUP_LINK);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 text-center relative overflow-hidden pt-8 md:pt-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-yellow-600/10 blur-[120px] md:blur-[180px] rounded-full"></div>

      {/* Circular Brand Logo */}
      <div className="mb-6 md:mb-10 relative group">
        <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full scale-110 group-hover:bg-yellow-500/35 transition-all duration-700"></div>
        
        <div className={`relative z-10 w-40 h-40 md:w-64 md:h-64 rounded-full border-[2px] md:border-[3px] border-yellow-500/40 p-1 bg-black shadow-[0_0_30px_rgba(212,175,55,0.2)] md:shadow-[0_0_50px_rgba(212,175,55,0.3)] overflow-hidden group-hover:border-yellow-500 transition-colors duration-500 ${!imgLoaded ? 'skeleton' : ''}`}>
          <img 
            src="https://i.ibb.co/h1LRKw3z/Screenshot-2025-12-30-111039.png" 
            alt="SMART INVESTORS CLUB Logo" 
            className={`w-full h-full object-cover rounded-full render-hd group-hover:scale-110 transition-all duration-700 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImgLoaded(true)}
            loading="eager"
            decoding="async"
            width="256"
            height="256"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
        </div>
      </div>

      <div className="mb-6 flex items-center gap-2 px-4 md:px-6 py-1.5 md:py-2 glass rounded-full border-yellow-600/20">
        <div className="flex items-center">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[9px] md:text-[10px] font-bold tracking-widest text-yellow-500 uppercase">5,482+ Elite Members Active</span>
        </div>
      </div>

      <h1 className="text-4xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-4 md:mb-6">
        <span className="gold-gradient block">SMART INVESTORS CLUB</span>
      </h1>
      <p className="text-gray-400 text-base md:text-2xl max-w-2xl mb-8 md:mb-12 italic font-light">
        "Stop being the liquidity. Follow the Institutional Banks with Smart Money Concepts."
      </p>

      <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full max-w-sm md:max-w-none justify-center items-center relative z-10">
        <a 
          href={VIP_GROUP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackLead('Hero Join Button')}
          className="btn-gold py-4 md:py-6 px-8 md:px-12 rounded-full text-lg md:text-2xl text-black font-black uppercase tracking-tighter shadow-xl hover:scale-105 transition-transform w-full md:w-auto text-center"
        >
          Join VIP WhatsApp
        </a>
        
        <button 
          onClick={copyLink}
          className="group border border-yellow-600/30 text-yellow-500/80 py-4 md:py-6 px-8 md:px-12 rounded-full text-base md:text-2xl uppercase font-black hover:bg-yellow-600/10 transition-all w-full md:w-auto flex items-center justify-center gap-2"
        >
          {copied ? (
            <span className="text-green-500 animate-pulse">Link Copied!</span>
          ) : (
            <>
              <span>Copy Invite</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 012-2v-8a2 2 0 01-2-2h-8a2 2 0 01-2 2v8a2 2 0 012 2z" />
              </svg>
            </>
          )}
        </button>
      </div>
      
      <div className="mt-8 md:mt-12 text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-gray-600 font-bold animate-pulse">
        Direct Access Available for Limited Time
      </div>
    </section>
  );
};

export default Hero;
