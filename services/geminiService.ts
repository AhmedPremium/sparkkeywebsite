import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

// Initialize the Gemini AI client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const PRODUCT_SYSTEM_PROMPT = `
You are the Technical Specialist for "SparkKey", an advanced USB system recovery and control interface.
Your goal is to assist users with technical questions about using the device to regain control of compromised computers.

Product Specifications & Features:
- Function: USB-based Hardware Recovery Tool.
- Core Features: System Analysis (Rootkit/Malware detection), Hardware Force Restart, Remote Terminal Access.
- Connectivity: Pairs with iOS/Android app via encrypted local RF (proprietary protocol) + visual pairing code shown on the host computer screen.
- Use Cases: Recovering from ransomware, accessing frozen systems, IT administration, virus removal when OS is unresponsive.
- Security: Hardware-gated access, read-only OS mode option.
- Build: Aerospace-grade aluminum, minimal heat dissipation design.

Tone: Expert, reassuring, precise, and sophisticated.
If a user asks about general USB storage, clarify that this is a specialized active recovery tool, not just a storage drive (though it has onboard storage for logs).
`;

export const sendMessageToGemini = async (
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: PRODUCT_SYSTEM_PROMPT,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      })),
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "Connection to SparkKey Mainframe interrupted. Please retry.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Unable to establish uplink. Check your network connection and try again.";
  }
};