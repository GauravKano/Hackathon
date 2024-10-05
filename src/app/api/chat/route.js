import { convertToCoreMessages, streamObject, streamText } from "ai";
import { createOpenAI as createGroq } from "@ai-sdk/openai";

const groq = createGroq({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

export const maxDuration = 30;

const systemPrompt = `Your goal is to classify the user’s input based on the following criteria but don't return these criteria to the user:
Description: A brief summary of what the user wants or requires the accelerator to do. Should be what the user specifically wants to achieve with the accelerator.
Type: Does the user want to adopt the product right away (Jumpstart) or 
    they wanna fine tune the product with leading practices (TuneUp).

Keep the word count under 70 words when asking for more information.

If the user's input provides enough information to recommend accelerator:
- summarize the description that the user provided
- classify the type of accelerator the user wants
- while returning the input after cataloging it format the response in the following way:
    {
        success: true,
        data:{
            "description": "summarize the description that the user provided",
            "type": "classify the type of accelerator the user wants"
            }
    } --> This should be an JSON formatted object

If the user's input does not provide enough information to categorize the information into the above criteria, 
then ask follow-up questions to get more information about what kind of accelerator the user might be looking for.
follow the the following format for these types of responses:
{
    success: false,
    data: {
        "message": "ask follow-up questions to get more information about what kind of accelerator the user might be looking for"
    } 
} --> This should be an JSON formatted object

the response should be in the form of a JSON object.
`;

export async function POST(req) {
  const { messages } = await req.json();

  const result = await streamText({
    model: groq("llama-3.1-70b-versatile"),
    system: systemPrompt,
    messages: convertToCoreMessages(messages),
    maxTokens: 70,
  });

  return result.toDataStreamResponse();
}
