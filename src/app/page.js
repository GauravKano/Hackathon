"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  // later change it so that authorized user will be redirected to dashboard
  useEffect(() => {
    router.push("/sign_in");
  }, []);

  return null;
}
