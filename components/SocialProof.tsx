
import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-[#080808] px-6 border-y border-gray-900 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter italic">
          LIVE <span className="gold-gradient underline underline-offset-8">WITHDRAWAL</span> PROOF
        </h2>
        <p className="text-gray-500 tracking-[0.3em] text-xs uppercase font-bold">Verified by MetaTrader 5 & Bank Statements</p>
      </div>

      <div className="relative w-full max-w-[320px] mx-auto group">
        <div className="absolute inset-0 bg-yellow-600/20 blur-2xl rounded-full scale-110 group-hover:bg-yellow-600/30 transition-all"></div>
        <div className="relative border-4 border-[#D4AF37] rounded-[40px] overflow-hidden aspect-[9/16] shadow-[0_0_60px_rgba(212,175,55,0.2)]">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/jbuc1tb-qNE?autoplay=0&mute=1&loop=1&playlist=jbuc1tb-qNE" 
            title="Trading Proof"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
        <span className="font-black italic text-xl tracking-tighter">EXNESS</span>
        <span className="font-black italic text-xl tracking-tighter">DELTA INDIA</span>
        <span className="font-black italic text-xl tracking-tighter">XM</span>
        <span className="font-black italic text-xl tracking-tighter">VANTAGE</span>
      </div>
    </section>
  );
};

export default SocialProof;
