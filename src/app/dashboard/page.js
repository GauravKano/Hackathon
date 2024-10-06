"use client";

import DisplayProductList from "@/components/DisplayProductList";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/components/NavBar";
import { firestore } from "../../lib/firebase";
import {
  collection,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";

export default function Dashboard() {
  const router = useRouter();

  // temp data
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    console.log("working1...");
    const docRef = doc(collection(firestore, "companies"), "user_id");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const docData = docSnap.data();
      setProducts(docData.products);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

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
