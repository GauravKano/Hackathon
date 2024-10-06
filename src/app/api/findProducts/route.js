import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";
import { NextResponse } from "next/server";

const textEmbedder = new HuggingFaceInferenceEmbeddings({
  model: "sentence-transformers/all-MiniLM-L6-v2",
  apiKey: process.env.HUGGINGFACE_API_KEY,
});

const getDbSerchResults = async (embedding, category) => {
  const address = process.env.MILVUS_SEARCH_ENDPOINT;
  const token = process.env.MILVUS_APIKEY;
  const searchInfo = {
    collectionName: "ProductData",
    data: [embedding],
    limit: 10,
    outputFields: ["category", "id", "name", "description", "distance"],
    filter: category === "None" ? undefined : `category == '${category}'`,
  };

  try {
    const response = await fetch(address, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(searchInfo),
    });

    if (!response.ok) {
      throw new Error(`Error! Status: ${response.status}`);
    }

    const resJson = await response.json();

    if (!resJson.data) {
      return [];
    }

    return resJson.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export async function POST(req) {
  const { description, category } = await req.json();

  // Embedding String for Vector DB Search
  const embedString =
    "Description: " + description + "\n\n Category: " + category;
  const embedding = await textEmbedder.embedQuery(embedString);

  // Get result from vector db
  const results = await getDbSerchResults(embedding, category);
  return NextResponse.json(results);
}
