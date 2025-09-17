// Import the Google GenAI SDK
import { GoogleGenAI } from "@google/genai";

// Import the Gemini API key from constants
import { GEMINI_API_KEY } from "./constants";

/**
 * Initialize Google GenAI client
 *
 * The `ai` instance can be used throughout the app to interact with
 * Google's Generative AI APIs using the provided GEMINI_API_KEY.
 */
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// Export the initialized AI client
export default ai;
