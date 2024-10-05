import { convertToCoreMessages, streamText } from "ai";
import { createOpenAI as createGroq } from "@ai-sdk/openai";

const groq = createGroq({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

export const maxDuration = 30;

const systemPrompt =
  "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.";

export async function POST(req) {
  const { messages } = await req.json();

  const result = await streamText({
    model: groq("llama-3.1-70b-versatile"),
    system: systemPrompt,
    messages: convertToCoreMessages(messages),
    maxTokens: 50,
  });

  return result.toDataStreamResponse();
}
