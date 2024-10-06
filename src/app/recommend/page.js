"use client";
import React, { useState } from "react";

import InfoForRecommendation from "@/components/InfoForRecommendation";
import Chat from "@/components/Chat";

function page() {
  const [recommend_list, setRecommendList] = useState();

  return <InfoForRecommendation />;
  //   return <Chat />;
}

export default page;
