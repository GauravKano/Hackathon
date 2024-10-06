import { SignIn, SignUp} from "@clerk/nextjs";
import React from "react";
import { redirect} from "next/navigation";

function page() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#141726',
      }}
    >
      <SignUp forceRedirectUrl="/huh"/>

    </div>
  );
}

export default page;
