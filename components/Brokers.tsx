
import React from 'react';
import { BROKER_LINKS } from '../constants';

const Brokers: React.FC = () => {
  const partners = [
    {
      name: "WINPRO FX",
      link: BROKER_LINKS.WINPRO_FX,
      description: "Institutional spreads with 1:500 leverage.",
      tag: "TOP CHOICE",
      features: ["0.0 Spreads", "No Swap"],
      color: "border-yellow-500/40",
      glow: "bg-yellow-500/5"
    },
    {
      name: "XM GLOBAL",
      link: BROKER_LINKS.XM,
      description: "Get $30 bonus to start without deposit.",
      tag: "ELITE TRUST",
      features: ["$30 Bonus", "Micro Accounts"],
      color: "border-red-500/30",
      glow: "bg-red-500/5"
    },
    {
      name: "EXNESS",
      link: BROKER_LINKS.EXNESS,
      description: "The world's largest retail broker by volume.",
      tag: "FAST PAYOUT",
      features: ["Instant WD", "Unlimited Leverage"],
      color: "border-blue-500/30",
      glow: "bg-blue-500/5"
    }
  ];

  return (
    <section className="py-16 md:py-28 bg-[#050505] px-4 md:px-6 relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-yellow-500/10 bg-yellow-500/5">
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-500">Official Partnerships</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black gold-gradient uppercase tracking-tighter mb-4 leading-tight">
            Institutional <br className="md:hidden" /> Gateways
          </h2>
          <p className="text-gray-500 text-[10px] md:text-sm uppercase tracking-[0.4em] font-bold max-w-lg mx-auto">
            Authorized Brokers for the Smart Investors Club
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {partners.map((broker, idx) => (
            <div 
              key={idx}
              className={`relative group bg-[#0A0A0A] border-l-4 ${broker.color} p-6 md:p-10 rounded-r-3xl rounded-l-lg transition-all duration-500 hover:bg-[#0D0D0D] overflow-hidden`}
            >
              {/* Subtle background glow */}
              <div className={`absolute inset-0 ${broker.glow} opacity-50`}></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-2.5 h-2.5 fill-yellow-500" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <h3 className="text-2xl md:text-4xl font-black text-white tracking-tighter uppercase">{broker.name}</h3>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[8px] md:text-[9px] font-black bg-white/10 text-white px-2 py-0.5 rounded tracking-widest uppercase mb-1">
                      {broker.tag}
                    </span>
                    <div className="flex items-center gap-1">
                       <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                      </span>
                      <span className="text-[7px] text-green-500 font-bold uppercase tracking-tighter">Verified</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-400 text-xs md:text-sm mb-6 leading-relaxed font-medium italic">
                  "{broker.description}"
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {broker.features.map((feat, i) => (
                    <span key={i} className="text-[9px] font-bold text-gray-500 border border-white/5 px-2 py-1 rounded bg-white/5">
                      {feat}
                    </span>
                  ))}
                </div>

                <a 
                  href={broker.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn block w-full relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                  <div className="btn-gold py-4 rounded-xl text-center text-black font-black uppercase text-sm md:text-base tracking-tighter relative z-10">
                    Open Trading Account
                  </div>
                </a>
              </div>

              {/* Decorative Corner Icon */}
              <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <svg className="w-24 h-24 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-20 glass p-6 md:p-8 rounded-[30px] border-yellow-500/10 text-center">
          <p className="text-gray-500 text-[9px] md:text-xs uppercase tracking-[0.3em] font-bold leading-loose">
            ⚠️ Disclaimer: Trading involves risk. Use these links to ensure you are mapped to the <span className="text-yellow-500">Smart Investors Club</span> liquidity pool for lower spreads.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Brokers;
