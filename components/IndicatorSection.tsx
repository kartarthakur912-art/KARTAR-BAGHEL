
import React from 'react';
import { VIP_GROUP_LINK } from '../constants';

const IndicatorSection: React.FC = () => {
  const features = [
    "Non-Repaint Signals",
    "FVG Scanner",
    "Order Block Detection",
    "Liquidity Sweep Alerts"
  ];

  return (
    <section className="py-20 md:py-32 bg-[#080808] relative overflow-hidden">
      {/* Decorative background flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-yellow-600/5 blur-[120px] rounded-full"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-yellow-500/10 bg-yellow-500/5">
           <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
           <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-yellow-500">Proprietary Algorithm</span>
        </div>
        
        {/* Heading */}
        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
          Top 1% <br /> <span className="gold-gradient">High Accuracy</span> <br /> Indicator
        </h2>
        
        {/* Description */}
        <p className="text-gray-400 text-base md:text-2xl font-light italic mb-12 leading-relaxed max-w-2xl mx-auto">
          "Stop being the liquidity. Our TradingView algorithm tracks bank volume in real-time, delivering institutional-grade entries directly to your chart."
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14 max-w-2xl mx-auto">
          {features.map((feat, i) => (
            <div key={i} className="flex items-center justify-center gap-3 bg-white/5 border border-white/5 p-4 rounded-2xl hover:border-yellow-500/20 transition-all group">
              <svg className="w-5 h-5 text-yellow-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-xs md:text-sm font-black text-gray-300 uppercase tracking-widest">{feat}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href={VIP_GROUP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold w-full sm:w-auto py-5 px-12 rounded-2xl text-black font-black uppercase text-lg md:text-xl shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:scale-105 transition-transform"
          >
            Claim Free Access
          </a>
          <div className="flex items-center gap-3 px-8 py-5 border border-white/10 rounded-2xl bg-black/40">
             <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Platform:</span>
             <span className="text-white font-black uppercase italic tracking-tighter text-sm">TradingView</span>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="mt-12 flex items-center justify-center gap-2">
           <div className="h-1 w-12 bg-gradient-to-r from-transparent to-yellow-500/20"></div>
           <p className="text-[10px] text-gray-600 font-bold uppercase tracking-[0.3em]">Institutional Grade V4.2</p>
           <div className="h-1 w-12 bg-gradient-to-l from-transparent to-yellow-500/20"></div>
        </div>
      </div>
    </section>
  );
};

export default IndicatorSection;
