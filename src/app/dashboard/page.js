"use client";

import DisplayProductList from "@/components/DisplayProductList";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/components/NavBar";

function Dashboard() {
  const router = useRouter();

  // temp data
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      description: "Description 1",
      category: "Tune-up",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description 2",
      category: "Jumpstart",
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description 3",
      category: "Jumpstart",
    },
    {
      id: 4,
      name: "Product 4",
      description: "Description 4",
      category: "Jumpstart",
    },
  ]);

  return (
    <div className="w-full h-full">
      <NavBar />
      <div className="space-y-6 px-6">
        <div className="flex justify-between px-4 py-6 border-b-2">
          <h1 className="text-3xl">Dashboard</h1>
          <div>
            <button
              className="button"
              onClick={() => router.push("/recommend")}
            >
              New Accelerators
            </button>
          </div>
        </div>

        <DisplayProductList products={products} />
      </div>
    </div>
  );
}

export default Dashboard;
