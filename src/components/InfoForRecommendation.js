"use client";
import React, { useState } from "react";
import Error from "@/components/Error";

function InfoForRecommendation({ setAcceleratorList, setProductsList }) {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ errorStatus: false, errorMessage: "" });

  const categoryList = [
    "None",
    "Marketing Automation",
    "Business Intelligence and Analytics",
    "Project Management",
    "Help Desk and Customer Support",
    "Customer Relationship Management (CRM)",
  ];
  const typeList = ["Jumpstart", "TuneUp"];

  const validateFields = () => {
    if (!description) {
      setError({ errorStatus: true, errorMessage: "Description is required" });
    } else if (!category) {
      setError({ errorStatus: true, errorMessage: "Category is required" });
    } else if (!type) {
      setError({ errorStatus: true, errorMessage: "Type is required" });
    } else {
      setError({ errorStatus: false, errorMessage: "" });
    }
  };

  const search = async () => {
    setLoading(true);
    validateFields();

    if (error.errorStatus) {
      setLoading(false);
      return;
    }
    try {
      const products = await fetch("/api/findProducts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description, category }),
      });

      const productResult = await products.json();
      setProductsList(productResult);

      const accelerators = await fetch("/api/findAccelerator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products: productResult, type }),
      });

      const acceleratorResult = await accelerators.json();
      setAcceleratorList(acceleratorResult);
      console.log(acceleratorResult);
    } catch (error) {
      console.error(error);
      setError({ errorStatus: true, errorMessage: "Failed to search" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full py-4 px-10">
      <div className="p-8 border-2 space-y-4">
        <h1 className="text-xl text-center">Recommendation Search</h1>

        <Error error={error} setError={setError} />

        <div className="space-y-2">
          <h4>Describe what product are you looking for:</h4>
          <textarea
            className="w-full border-2 rounded-lg p-2"
            type="text"
            placeholder="Describe the Product"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={loading}
          />
        </div>

        <div className="flex space-x-6">
          <div className="w-1/2 flex flex-col gap-2">
            <h4>Category:</h4>
            <select
              className="border-black border rounded-lg p-1"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              disabled={loading}
            >
              <option value=""></option>
              {categoryList.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="w-1/2 flex flex-col gap-2">
            <h4>Type:</h4>
            <select
              className="border-black border rounded-lg p-1"
              value={type}
              onChange={(e) => setType(e.target.value)}
              disabled={loading}
            >
              <option value=""></option>
              {typeList.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="button my-2" onClick={search} disabled={loading}>
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default InfoForRecommendation;
