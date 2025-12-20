
import { GoogleGenAI } from "@google/genai";

export const getTradingAdvice = async (query: string) => {
  try {
    // Initializing AI instance directly inside the service call to ensure fresh environment variable access
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `You are the Lead Institutional Trader for "TOP 1% CLUB FX". 
        Expertise: Smart Money Concepts (SMC), Order Blocks, Fair Value Gaps (FVG), 
        Liquidity Sweeps, and Bank-level institutional trading.
        Tone: Professional, elite, and encouraging. 
        Always promote the VIP WhatsApp group: https://chat.whatsapp.com/F5Sb4Lr0K9B4vKuaUkpjMP
        Legal: Add a risk disclaimer that you are not SEBI registered and content is for education only.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Analyzing market liquidity... Join VIP for live entries and bank-level setups!";
  }
};
