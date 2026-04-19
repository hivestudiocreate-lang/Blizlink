import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export interface MatchResult {
  reasoning: string;
  suggestedIndustries: string[];
  connectionStrategy: string;
}

export async function getBusinessMatches(businessDescription: string): Promise<MatchResult> {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Analyze this business description and suggest the best types of B2B partners, vendors, or investors they should connect with in Zambia. Business Description: ${businessDescription}`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          reasoning: {
            type: Type.STRING,
            description: "A professional explanation of why these matches were chosen."
          },
          suggestedIndustries: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "List of industries the business should target for partnerships."
          },
          connectionStrategy: {
            type: Type.STRING,
            description: "Actionable advice on how to approach these businesses."
          }
        },
        required: ["reasoning", "suggestedIndustries", "connectionStrategy"]
      }
    }
  });

  return JSON.parse(response.text || '{}');
}
