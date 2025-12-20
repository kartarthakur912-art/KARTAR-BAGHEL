
import React, { useState } from 'react';
import { getTradingAdvice } from '../services/gemini';
import { WHATSAPP_NUMBER } from '../constants';

const ContactForm: React.FC = () => {
  const [waNumber, setWaNumber] = useState('');
  const [waMsg, setWaMsg] = useState('');
  const [aiQuery, setAiQuery] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleWhatsAppSend = () => {
    if (!waNumber || !waMsg) {
      alert("Please fill in your details.");
      return;
    }
    const text = encodeURIComponent(`🚀 *AI LEAD CAPTURED* 🚀\n\n👤 *Client:* ${waNumber}\n💬 *Query:* ${waMsg}\n\n_Sent via Top 1% Club FX Landing Page_`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  const handleAiAsk = async () => {
    if (!aiQuery) return;
    setIsLoading(true);
    setAiResponse("Analyzing institutional flows...");
    const result = await getTradingAdvice(aiQuery);
    setAiResponse(result || "");
    setIsLoading(false);
  };

  return (
    <section className="py-24 bg-[#080808] px-6 border-t border-gray-900">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="glass p-8 md:p-12 rounded-[32px] border-yellow-600/20 shadow-2xl relative">
          <div className="absolute -top-4 right-8 bg-green-600 text-[10px] font-black px-3 py-1 rounded-full animate-pulse shadow-[0_0_15px_rgba(22,163,74,0.5)]">
            EXPERT ONLINE
          </div>
          <div className="mb-10 text-left">
            <h3 className="text-3xl font-black uppercase gold-gradient">Priority Support</h3>
            <p className="text-gray-500 text-sm mt-1 uppercase tracking-widest font-bold">Instant Inquiry System</p>
          </div>
          <div className="space-y-6">
            <div>
              <label className="text-[10px] text-gray-500 uppercase font-black tracking-widest ml-1">WhatsApp Number</label>
              <input 
                type="text" 
                value={waNumber}
                onChange={(e) => setWaNumber(e.target.value)}
                placeholder="+91 XXXX XXXX" 
                className="w-full p-5 rounded-2xl mt-2 bg-white/5 border border-white/10 text-white outline-none focus:border-yellow-500/50 transition-all"
              />
            </div>
            <div>
              <label className="text-[10px] text-gray-500 uppercase font-black tracking-widest ml-1">Your Message</label>
              <textarea 
                rows={3} 
                value={waMsg}
                onChange={(e) => setWaMsg(e.target.value)}
                placeholder="I want to join VIP signals..." 
                className="w-full p-5 rounded-2xl mt-2 bg-white/5 border border-white/10 text-white outline-none focus:border-yellow-500/50 transition-all"
              ></textarea>
            </div>
            <button 
              onClick={handleWhatsAppSend}
              className="w-full btn-gold py-5 rounded-2xl text-xl text-black uppercase font-black shadow-lg hover:brightness-110 active:scale-[0.98] transition-all"
            >
              Contact On WhatsApp
            </button>
          </div>
        </div>

        <div className="glass p-8 md:p-12 rounded-[32px] border-blue-500/20 shadow-2xl bg-gradient-to-br from-blue-900/5 to-transparent">
          <div className="mb-10 text-left">
            <h3 className="text-3xl font-black uppercase text-blue-400">AI Trading Lab</h3>
            <p className="text-gray-500 text-sm mt-1 uppercase tracking-widest font-bold">Smart Money Analysis</p>
          </div>
          <div className="space-y-6">
            <div>
              <label className="text-[10px] text-gray-500 uppercase font-black tracking-widest ml-1">Ask our AI Lead Trader</label>
              <div className="flex gap-2 mt-2">
                <input 
                  type="text" 
                  value={aiQuery}
                  onChange={(e) => setAiQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAiAsk()}
                  placeholder="Ask about SMC or Gold trends..." 
                  className="flex-1 p-5 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-blue-500/50 transition-all"
                />
                <button 
                  onClick={handleAiAsk}
                  disabled={isLoading}
                  className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white px-6 rounded-2xl font-black uppercase text-sm transition-all"
                >
                  {isLoading ? '...' : 'Ask'}
                </button>
              </div>
            </div>
            {aiResponse && (
              <div className="p-6 bg-blue-900/20 border border-blue-500/30 rounded-2xl text-blue-100 text-sm leading-relaxed animate-in fade-in slide-in-from-bottom-2 duration-500">
                {aiResponse}
              </div>
            )}
            {!aiResponse && (
              <div className="p-6 border border-white/5 rounded-2xl text-gray-600 text-[10px] italic">
                Try: "Explain Order Blocks" or "What is a Liquidity Sweep?"
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
