import { GoogleGenAI, Chat } from "@google/genai";

const SYSTEM_INSTRUCTION = "You are Synapse, a friendly and empathetic AI wellness companion. Your goal is to provide supportive, helpful, and educational conversations about mental well-being, stress management, and self-care. You are not a licensed therapist and should gently remind the user of this if they ask for medical advice, diagnosis, or treatment, suggesting they consult a qualified professional. Offer evidence-based information, mindfulness exercises, and a listening ear. Keep your tone warm, encouraging, and non-judgmental. Your communication style is clear, direct, and aligned with a young adult audience, without being overly superficial.";

let chatInstance: Chat | null = null;

/**
 * Initializes and returns a singleton instance of the Gemini Chat.
 * Throws an error if the API key is not configured.
 */
export function getChatInstance(): Chat {
    if (chatInstance) {
        return chatInstance;
    }

    // The original error indicates that `process.env.API_KEY` is the issue.
    // This check ensures we can handle it gracefully in the UI.
    if (!process.env.API_KEY) {
        // Throw a specific error that the UI can catch and interpret.
        throw new Error("API key is not available. Please configure the API_KEY environment variable.");
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatInstance = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
        },
    });
    
    return chatInstance;
}
