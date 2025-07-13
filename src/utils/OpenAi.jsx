import OpenAI from "openai";
import { OPEN_API } from "./constants";

const client = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',

  apiKey: OPEN_API,
  dangerouslyAllowBrowser: true, // This is the default and can be omitted
});

export default client;
