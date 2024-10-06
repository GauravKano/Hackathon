"use client";
import NavBar from "@/components/NavBar";
import { SignUp } from "@clerk/nextjs";
import React from "react";

export default function Signup() {
  return (
    <div className="min-h-screen min-w-screen w-full h-full flex flex-col">
      <NavBar />
      <div className="w-full my-7 flex justify-center items-center flex-grow">
        <SignUp forceRedirectUrl="/user_profile" />
      </div>
    </div>
  );
}
