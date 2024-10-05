import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";

function DisplayAcceleratorList({ recommend_list }) {
  return (
    <div className="w-full px-8 py-4 space-y-4">
      <div className="border-b-2">
        <h1 className="text-xl">Recommendation</h1>
      </div>
      {recommend_list.map((recommend, i) => (
        <div key={i} className="border-2 rounded p-4 flex justify-between">
          <div className="w-11/12">
            <div className="flex justify-between">
              <h1>{recommend.name}</h1>
              <h1>{recommend.type}</h1>
            </div>
            <div>{recommend.description}</div>
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
  );
}

export default DisplayAcceleratorList;
