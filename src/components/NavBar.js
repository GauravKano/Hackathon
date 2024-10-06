import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

function NavBar() {
  const router = useRouter();

  return (
    <div className="w-full py-4 px-6">
      <div className="flex justify-between items-center">
        <div className="text-2xl cursor-pointer hover:text-hover-color">
          <h1 onClick={() => router.push("/dashboard")}>App Name</h1>
        </div>
        <UserButton
          userProfileMode="navigation"
          userProfileUrl="/user_profile"
          afterSignOutUrl="/sign_in"
        />
      </div>
    </div>
  );
}

export default NavBar;
