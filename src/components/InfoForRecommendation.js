"use client";
import React, { useState } from "react";

function InfoForRecommendation(setRecommendList) {
  const [description, setDescription] = useState("");
  const [usage, setUsage] = useState("");

  const search = () => {
    console.log("Recommendation");
  };

  return (
    <div className="w-full p-8">
      <div className="p-5 border-2 space-y-4">
        <h1 className="text-xl">Recommendation</h1>
        <div className="space-y-2">
          <h4>Describe what product are you looking for?</h4>
          <input
            className="w-full border-2 rounded-lg p-2"
            type="text"
            placeholder="Describe the Product"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <h4>What are you gonna use the product for?</h4>
          <input
            className="w-full border-2 rounded-lg p-2"
            type="text"
            placeholder="Describe the Product Usage"
            value={usage}
            onChange={(e) => setUsage(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button className="button" onClick={search}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default InfoForRecommendation;
