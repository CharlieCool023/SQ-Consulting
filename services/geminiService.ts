import { GoogleGenAI, Content, Part } from "@google/genai";
import { CHAT_SYSTEM_INSTRUCTION } from "../constants";

// Declare process to satisfy TypeScript compiler (value injected by Vite)
declare const process: { env: { API_KEY: string } };

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("API_KEY is missing from environment variables.");
      return null;
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

export const sendMessageToGemini = async (
  history: { role: 'user' | 'model'; text: string }[],
  newMessage: string
): Promise<string> => {
  const client = getClient();
  if (!client) {
    return "I'm currently offline. Please book a free call instead.";
  }

  try {
    // Map history to the specific format expected by the SDK
    const formattedHistory: Content[] = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text } as Part]
    }));

    const chat = client.chats.create({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: CHAT_SYSTEM_INSTRUCTION,
      },
      history: formattedHistory
    });

    const response = await chat.sendMessage({ message: newMessage });
    return response.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server right now. Please try booking a call instead.";
  }
};