"use client";
import React, { useState } from "react";

import InfoForRecommendation from "@/components/InfoForRecommendation";
import Chat from "@/components/Chat";
import DisplayAcceleratorList from "@/components/DisplayAcceleratorList";

function page() {
  const [productsList, setProductsList] = useState([]);
  const [acceleratorList, setAcceleratorList] = useState([]);

  return (
    <div className="w-full h-full">
      <InfoForRecommendation
        setAcceleratorList={setAcceleratorList}
        setProductsList={setProductsList}
      />
      <DisplayAcceleratorList recommend_list={acceleratorList} />
    </div>
  );
}

export default page;
