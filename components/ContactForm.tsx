
import React, { useState } from 'react';
import { WHATSAPP_NUMBER } from '../constants';

const ContactForm: React.FC = () => {
  const [waNumber, setWaNumber] = useState('');
  const [waMsg, setWaMsg] = useState('');

  const handleWhatsAppSend = () => {
    if (!waNumber || !waMsg) {
      alert("Please fill in your details.");
      return;
    }
    const text = encodeURIComponent(`🚀 *ELITE LEAD CAPTURED* 🚀\n\n👤 *Client:* ${waNumber}\n💬 *Query:* ${waMsg}\n\n_Sent via Top 1% Club FX Landing Page_`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section className="py-12 md:py-24 bg-[#080808] px-6 border-t border-gray-900">
      <div className="max-w-xl mx-auto">
        {/* Priority Support Card - Now Centered and Primary */}
        <div className="glass p-6 md:p-12 rounded-[24px] md:rounded-[32px] border-yellow-600/20 shadow-2xl relative">
          <div className="absolute -top-3 right-6 bg-green-600 text-[8px] md:text-[10px] font-black px-2 py-1 rounded-full animate-pulse shadow-lg">
            EXPERT ONLINE
          </div>
          <div className="mb-6 md:mb-10 text-left">
            <h3 className="text-2xl md:text-3xl font-black uppercase gold-gradient">Priority Support</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-gray-500 text-[9px] uppercase tracking-widest font-bold">Direct Line:</span>
              <span className="text-yellow-500 text-[10px] md:text-xs font-black tracking-widest">+91 99933 84045</span>
            </div>
          </div>
          <div className="space-y-4 md:space-y-6">
            <div>
              <label className="text-[9px] text-gray-500 uppercase font-black tracking-widest ml-1">Your WhatsApp Number</label>
              <input 
                type="text" 
                value={waNumber}
                onChange={(e) => setWaNumber(e.target.value)}
                placeholder="+91 XXXX XXXX" 
                className="w-full p-4 md:p-5 rounded-xl md:rounded-2xl mt-1 md:mt-2 bg-white/5 border border-white/10 text-sm md:text-base text-white outline-none focus:border-yellow-500/50 transition-all"
              />
            </div>
            <div>
              <label className="text-[9px] text-gray-500 uppercase font-black tracking-widest ml-1">How can we help you?</label>
              <textarea 
                rows={3} 
                value={waMsg}
                onChange={(e) => setWaMsg(e.target.value)}
                placeholder="I want to join VIP signals and learn SMC..." 
                className="w-full p-4 md:p-5 rounded-xl md:rounded-2xl mt-1 md:mt-2 bg-white/5 border border-white/10 text-sm md:text-base text-white outline-none focus:border-yellow-500/50 transition-all"
              ></textarea>
            </div>
            <button 
              onClick={handleWhatsAppSend}
              className="w-full btn-gold py-4 md:py-5 rounded-xl md:rounded-2xl text-base md:text-xl text-black uppercase font-black shadow-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span>Connect On WhatsApp</span>
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </button>
          </div>
          <p className="mt-8 text-center text-gray-600 text-[10px] uppercase tracking-widest font-bold">
            Average response time: &lt; 5 minutes
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
