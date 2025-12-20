
import React from 'react';
import { GENERATED_PROOFS, VIP_GROUP_LINK } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="text-center mb-16 px-6">
        <h2 className="text-4xl md:text-7xl font-black mb-4 uppercase tracking-tighter">
          MEMBER <span className="gold-gradient">PROFITS</span>
        </h2>
        <div className="inline-flex items-center gap-2 px-4 py-1 glass rounded-full border-green-500/30 text-green-500 text-[10px] font-bold uppercase tracking-widest">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></span>
          Live Results: {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
        </div>
      </div>

      <div className="proof-scroll-container relative">
        <div className="flex overflow-x-auto gap-4 md:gap-8 px-[10vw] pb-12 hide-scrollbar snap-x snap-mandatory">
          {GENERATED_PROOFS.map((proof) => (
            <div 
              key={proof.id} 
              className="relative flex-none w-[280px] md:w-[320px] group rounded-3xl overflow-hidden aspect-[9/16] bg-black border border-gray-900 hover:border-yellow-600/50 transition-all duration-500 snap-center"
            >
              <img 
                src={proof.image} 
                alt={proof.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-yellow-500 text-black text-[10px] font-black px-3 py-1.5 rounded-lg shadow-xl uppercase italic z-10">
                {proof.profit}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                <p className="text-white text-xs font-black uppercase tracking-widest">{proof.name}</p>
                <p className="text-green-500 text-[10px] font-bold mt-1 uppercase tracking-tighter italic">✅ VIP MEMBER • {proof.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center px-6">
        <div className="flex justify-center gap-2 mb-10 text-gray-500 font-bold uppercase text-[10px] tracking-widest">
           <span className="animate-pulse">← Swipe Side to See Proofs →</span>
        </div>
        <a 
          href={VIP_GROUP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold py-7 px-12 md:px-20 rounded-full text-2xl md:text-3xl text-black font-black uppercase italic tracking-tighter shadow-2xl inline-block hover:scale-105 transition-transform"
        >
          Copy My Trades Free
        </a>
      </div>
    </section>
  );
};

export default Gallery;
