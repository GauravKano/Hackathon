"use client";
import React, { useState } from "react";

import InfoForRecommendation from "@/components/InfoForRecommendation";
import Chat from "@/components/Chat";
import DisplayAcceleratorList from "@/components/DisplayAcceleratorList";
import NavBar from "@/components/NavBar";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function Recommend() {
  const [productsList, setProductsList] = useState([]);
  const [acceleratorList, setAcceleratorList] = useState([]);
  const router = useRouter();
  // const [emptyList, setEmptyList] = useState(true);

  return (
    <div className="w-full h-full">
      <NavBar />

      <div className="px-10 flex items-center ">
        <div
          className="p-2 flex items-center cursor-pointer hover:bg-gray-600 space-x-1"
          onClick={() => router.push("/dashboard")}
        >
          <IoArrowBack />
          <div>Back</div>
        </div>
      </div>

      <InfoForRecommendation
        setAcceleratorList={setAcceleratorList}
        setProductsList={setProductsList}
      />

      <DisplayAcceleratorList recommend_list={acceleratorList} />
    </div>
  );
}
