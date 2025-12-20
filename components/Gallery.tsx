
import React, { useState } from 'react';
import { MEMBER_PROOFS, VIP_GROUP_LINK } from '../constants';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-16 bg-[#0a0a0a]">
      <div className="text-center mb-10 px-6">
        <h2 className="text-2xl md:text-5xl font-black gold-gradient uppercase mb-4 tracking-tighter">
          Institutional Profit Proofs
        </h2>
        <p className="text-gray-500 text-xs uppercase tracking-[0.3em] font-bold">Verified MT5 Live Terminals</p>
      </div>

      <div className="relative">
        <div className="proof-container hide-scrollbar">
          {MEMBER_PROOFS.map((proof) => (
            <div 
              key={proof.id} 
              onClick={() => setSelectedImage(proof.image)}
              className="flex-none w-[260px] md:w-[300px] snap-start rounded-[15px] overflow-hidden border border-yellow-600/30 bg-black cursor-zoom-in group transition-all duration-300 hover:border-yellow-500 shadow-2xl"
            >
              {/* Image Container - Using object-contain and min-h to ensure NO CROPPING */}
              <div className="h-[450px] w-full flex items-center justify-center bg-[#050505] relative overflow-hidden">
                <img 
                  src={proof.image} 
                  alt="Institutional Proof" 
                  className="w-full h-full object-contain render-hd block"
                  loading="lazy"
                />
                {/* Subtle HD glass effect overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
              
              <div className="p-4 border-t border-yellow-600/20 bg-black/90 flex justify-between items-center">
                 <div className="flex flex-col">
                   <span className="text-[11px] font-black text-white uppercase tracking-wider">{proof.name}</span>
                   <span className="text-[12px] font-black gold-gradient uppercase italic">{proof.profit}</span>
                 </div>
                 <div className="bg-green-600/10 text-green-500 text-[8px] px-2 py-1 rounded border border-green-500/20 font-black uppercase">
                   {proof.timestamp}
                 </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col items-center gap-3 mt-6">
          <p className="text-gray-500 text-[10px] uppercase tracking-[0.4em] font-bold animate-pulse">
            ← Swipe side for all 18 results →
          </p>
          <div className="w-24 h-0.5 bg-yellow-600/20 rounded-full overflow-hidden">
             <div className="w-1/3 h-full bg-yellow-500 animate-[shimmer_2s_infinite]"></div>
          </div>
        </div>
      </div>

      {/* Lightbox - Maximum Resolution Viewing */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-2 md:p-10 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white text-5xl font-light hover:text-yellow-500 transition-colors">&times;</button>
          <div className="relative w-full h-full flex items-center justify-center">
             <img 
              src={selectedImage} 
              alt="Full Size Proof" 
              className="max-w-full max-h-[98vh] object-contain shadow-[0_0_100px_rgba(212,175,55,0.15)] render-hd"
             />
          </div>
          <div className="absolute bottom-6 text-white/30 text-[10px] uppercase tracking-[0.5em] font-black">
            Click anywhere to close
          </div>
        </div>
      )}

      <div className="mt-16 text-center px-6">
        <a 
          href={VIP_GROUP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block btn-gold px-12 py-6 rounded-full text-black font-black uppercase text-2xl shadow-[0_15px_50px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 transition-all"
        >
          Join VIP WhatsApp — FREE
        </a>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </section>
  );
};

export default Gallery;
