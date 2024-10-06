import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";

function NavBar() {
  const router = useRouter();

  return (
    <div className="w-full py-4 px-6">
      <div className="flex justify-between items-center">
        <div className="text-2xl cursor-pointer hover:text-hover-color">
          <h1 onClick={() => router.push("/dashboard")}>App Name</h1>
        </div>
        <div className="">
          <a>
            <FaRegUserCircle className="text-2xl cursor-pointer hover:text-hover-color" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
