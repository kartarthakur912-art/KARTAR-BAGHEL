
import React, { useState } from 'react';
import { MEMBER_PROOFS, VIP_GROUP_LINK } from '../constants';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-12 md:py-16 bg-[#0a0a0a]">
      <div className="text-center mb-8 px-6">
        <h2 className="text-2xl md:text-5xl font-black gold-gradient uppercase mb-2 tracking-tighter">
          Profit Proofs
        </h2>
        <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">Verified MT5 Live Terminals</p>
      </div>

      <div className="relative">
        <div className="proof-container hide-scrollbar">
          {MEMBER_PROOFS.map((proof) => (
            <div 
              key={proof.id} 
              onClick={() => setSelectedImage(proof.image)}
              className="flex-none w-[220px] md:w-[300px] snap-start rounded-[12px] md:rounded-[15px] overflow-hidden border border-yellow-600/20 bg-black cursor-zoom-in group transition-all duration-300 hover:border-yellow-500"
            >
              <div className="h-[320px] md:h-[450px] w-full flex items-center justify-center bg-[#050505] relative overflow-hidden">
                <img 
                  src={proof.image} 
                  alt="Institutional Proof" 
                  className="w-full h-full object-contain render-hd block"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
              
              <div className="p-3 md:p-4 border-t border-yellow-600/10 bg-black flex justify-between items-center">
                 <div className="flex flex-col">
                   <span className="text-[9px] md:text-[11px] font-black text-white uppercase tracking-wider">{proof.name}</span>
                   <span className="text-[10px] md:text-[12px] font-black gold-gradient uppercase italic">{proof.profit}</span>
                 </div>
                 <div className="bg-green-600/10 text-green-500 text-[7px] md:text-[8px] px-1.5 py-0.5 rounded border border-green-500/20 font-black uppercase">
                   {proof.timestamp}
                 </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col items-center gap-2 mt-4">
          <p className="text-gray-500 text-[9px] uppercase tracking-[0.3em] font-bold animate-pulse">
            ← Swipe side for results →
          </p>
          <div className="w-16 h-0.5 bg-yellow-600/20 rounded-full overflow-hidden">
             <div className="w-1/3 h-full bg-yellow-500"></div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-4 right-4 text-white text-4xl hover:text-yellow-500 transition-colors">&times;</button>
          <img src={selectedImage} className="max-w-full max-h-[90vh] object-contain shadow-2xl render-hd" />
        </div>
      )}

      <div className="mt-10 md:mt-16 text-center px-6">
        <a 
          href={VIP_GROUP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block btn-gold px-10 py-4 md:px-12 md:py-6 rounded-full text-black font-black uppercase text-xl md:text-2xl shadow-xl hover:scale-105 active:scale-95 transition-all"
        >
          Join VIP Group
        </a>
      </div>
    </section>
  );
};

export default Gallery;
