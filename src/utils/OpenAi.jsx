import OpenAI from "openai";
import { OPEN_API } from "./constants";

const client = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',

  defaultHeaders: {
    "HTTP-Referer": "http://localhost:5173", // Optional but sometimes required
    "X-Title": "Movie Recommendation GPT",
  },

  apiKey: OPEN_API,
  dangerouslyAllowBrowser: true, // This is the default and can be omitted

  
});

console.log("OPEN_API KEY:", OPEN_API);


export default client;
