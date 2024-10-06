"use client";
import NavBar from "@/components/NavBar";
import { SignIn } from "@clerk/nextjs";
import React, { useEffect } from "react";

export default function Signin() {
  return (
    <div className="min-h-screen min-w-screen w-full h-full flex flex-col">
      <NavBar />
      <div className="w-full my-7 flex justify-center items-center flex-grow">
        <SignIn forceRedirectUrl="/dashboard" />
      </div>
    </div>
  );
}
