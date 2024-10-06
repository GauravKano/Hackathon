import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";

function DisplayAcceleratorList({ recommend_list }) {
  return (
    <div
      className={recommend_list.length < 1 ? "hidden" : "w-full px-8 space-y-4"}
    >
      <div className="border-b-2 py-4">
        <h1 className="text-2xl">Recommendation</h1>
      </div>
      <div className="space-y-6 p-2">
        {recommend_list.map((recommend, i) => (
          <div
            key={i}
            className="border-2 rounded p-4 flex justify-between bg-card-color border-card-border-color"
          >
            <div className="w-11/12">
              <div className="space-y-1">
                <h1 className="text-lg">{recommend.name}</h1>
                <h1 className="px-2">Type: {recommend.type}</h1>
                <h1 className="px-2">
                  Short Description: {recommend.shortDescription}
                </h1>
              </div>
            </div>
            <div className="w-1/12 flex items-center justify-center">
              <div>
                <button>
                  <IoIosArrowDropdown />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayAcceleratorList;
