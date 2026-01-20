
// Always use the standard GoogleGenAI import from @google/genai
import { GoogleGenAI } from "@google/genai";
import { CHAT_SYSTEM_INSTRUCTION } from "../constants";

/**
 * Sends a message to the Gemini AI model following latest SDK patterns.
 * Ensures the API client is initialized correctly with environment variables.
 */
export const sendMessageToGemini = async (
  history: { role: 'user' | 'model'; text: string }[],
  newMessage: string
): Promise<string> => {
  // Initialize right before use to ensure the latest API key is used
  // and named parameter { apiKey: process.env.API_KEY } is used.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    // Map history to the format expected by the SDK: { role, parts: [{ text }] }[]
    const formattedHistory = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    // Using gemini-3-flash-preview for basic text and conversational tasks
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: CHAT_SYSTEM_INSTRUCTION,
      },
      history: formattedHistory
    });

    // chat.sendMessage only accepts the message parameter
    const response = await chat.sendMessage({ message: newMessage });
    
    // Use .text property to get the string output from GenerateContentResponse
    return response.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server right now. Please try booking a call instead.";
  }
};
