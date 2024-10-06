import React from "react";

function DisplayProductList({ products }) {
  return (
    <div className="w-full p-4 space-y-4">
      {products.map((product, i) => (
        <div
          key={i}
          className="border-2 rounded p-4 bg-card-color border-card-border-color"
        >
          <div className="flex justify-between">
            <div>
              <h1 className="text-lg">{product}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayProductList;
