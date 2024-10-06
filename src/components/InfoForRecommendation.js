import React from "react";

function InfoForRecommendation() {
  const recommend = () => {
    console.log("Recommendation");
  };

  return (
    <div className="w-full">
      <div className="m-8 p-5 border-2 space-y-4">
        <h1>Recommendation</h1>
        <div className="space-y-2">
          <h4>Describe what product are you looking for?</h4>
          <input
            className="w-full border-2 rounded-lg p-2"
            type="text"
            placeholder="Describe the Product"
          />
        </div>
        <div className="space-y-2">
          <h4>What are you gonna use the product for?</h4>
          <input
            className="w-full border-2 rounded-lg p-2"
            type="text"
            placeholder="Describe the Product Usage"
          />
        </div>
        <div className="flex justify-end">
          <button className="button" onClick={recommend}>
            Recommend
          </button>
        </div>
      </div>
    </div>
  );
}

export default InfoForRecommendation;
