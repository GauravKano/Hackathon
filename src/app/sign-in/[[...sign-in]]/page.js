import { SignIn } from "@clerk/nextjs";
import React from "react";

function Page() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#3E63DD',
      }}
    >
      <SignIn />
    </div>
  );
}

export default Page;

