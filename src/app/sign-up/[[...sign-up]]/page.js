import { SignUp} from "@clerk/nextjs";
import React from "react";

function page() {
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
      <SignUp />
    </div>
  );
}

export default page;
