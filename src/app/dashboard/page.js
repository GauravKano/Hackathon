import React from "react";

function page() {
  return (
    <div className="w-full h-full p-6">
      <div className="space-y-2">
        <div className="flex justify-between p-4">
          <h1 className="text-3xl">Dashboard</h1>
          <div>
            <button className="button">New Accelerators</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
