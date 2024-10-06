import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";
import { NextResponse } from "next/server";

const textEmbedder = new HuggingFaceInferenceEmbeddings({
  model: "sentence-transformers/all-MiniLM-L6-v2",
  apiKey: process.env.HUGGINGFACE_API_KEY,
});

const getDbSerchResults = async (embedding, type) => {
  const address = process.env.MILVUS_SEARCH_ENDPOINT;
  const token = process.env.MILVUS_APIKEY;
  const searchInfo = {
    collectionName: "Accelerators",
    data: [embedding],
    limit: 1,
    outputFields: [
      "id",
      "name",
      "productName",
      "shortDescription",
      "type",
      "distance",
    ],
    filter: `type == '${type}'`,
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
  const { products, type } = await req.json();

  const results = [];
  for (let i = 0; i < products.length; i++) {
    const productName = products[i].name;

    const embedString = "Product Name: " + productName + "\n\n Type: " + type;
    const embedding = await textEmbedder.embedQuery(embedString);

    // Get result from vector db
    const searchResult = await getDbSerchResults(embedding, type);

    if (searchResult.length > 0) {
      results.push(searchResult);
    }
  }

  return NextResponse.json(results);
}
