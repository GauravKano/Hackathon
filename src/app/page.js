"use client";
import Image from "next/image";
import { redirect} from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  redirect('/sign-in');
  return null;
}
