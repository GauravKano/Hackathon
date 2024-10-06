"use client";
import React, { useState } from "react";
import { useChat } from "ai/react";

function Chat() {
  //   const { initialMessages, messages, input, handleInputChange, handleSubmit } =
  //     useChat();
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello e reijnijer nijrneij nerijnijrnijgnerijgn erijngijerngijrne ijgnrijngijer nijergnijngijrnijre ngijrnijgnre ijgnreijngjeringijrjnijr nigjrnei",
    },
    {
      role: "user",
      content: "Hi gri ngirngrnignrin ijrngijnijgn ijrgnijrnijgnr ijgnij rngr",
    },
  ]);

  return (
    <div className="w-full h-full border-20 rounded"></div>
    // <div className="w-full h-screen">
    //   <div className="h-full m-8 p-4 border-2 rounded-md">
    //     {/* {messages.map((message, i) => (
    //       <div
    //         key={i}
    //         className={
    //           message.role == "assistant"
    //             ? "flex justify-start space-y-4"
    //             : "flex justify-end space-y-4"
    //         }
    //       >
    //         <h1
    //           className={
    //             message.role == "assistant"
    //               ? "max-w-96 bg-gray-200 p-2 m-2 rounded-lg"
    //               : "max-w-96 bg-blue-200 p-2 m-2 rounded-lg"
    //           }
    //         >
    //           {message.content}
    //         </h1>
    //       </div>
    //     ))} */}
    //   </div>
    // </div>
  );
}

export default Chat;
