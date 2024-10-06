"use client";
import React, { useState } from "react";

import InfoForRecommendation from "@/components/InfoForRecommendation";
import Chat from "@/components/Chat";
import DisplayAcceleratorList from "@/components/DisplayAcceleratorList";

function page() {
  const [recommend_list, setRecommendList] = useState([
    {
      id: 1,
      name: "Accelerator 1",
      description: "Description 1",
      type: "Tune-up",
    },
    {
      id: 2,
      name: "Accelerator 2",
      description: "Description 2",
      type: "Jumpstart",
    },
    {
      id: 3,
      name: "Accelerator 3",
      description: "Description 3",
      type: "Jumpstart",
    },
    {
      id: 4,
      name: "Accelerator 4",
      description: "Description 4",
      type: "Jumpstart",
    },
  ]);

  return (
    <div className="w-full h-full">
      <InfoForRecommendation setRecommendList={setRecommendList} />
      <DisplayAcceleratorList recommend_list={recommend_list} />
    </div>
  );
}

export default page;
