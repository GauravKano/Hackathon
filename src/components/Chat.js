"use client";
import React, { useState } from "react";
import { useChat } from "ai/react";

function Chat() {
  const { initialMessages, messages, input, handleInputChange, handleSubmit } =
    useChat({
      api: "/api/chat",
      initialMessages: [
        {
          role: "assistant",
          content: "Hello",
        },
      ],
    });

  return (
    <div className="w-full h-screen p-8">
      <div className="h-full flex flex-col p-4 border-2 rounded-md">
        <div className="h-5/6">
          {messages.map((message, i) => (
            <div
              key={i}
              className={
                message.role == "assistant"
                  ? "flex justify-start space-y-4"
                  : "flex justify-end space-y-4"
              }
            >
              <h1
                className={
                  message.role == "assistant"
                    ? "max-w-96 bg-gray-200 p-2 m-2 rounded-lg"
                    : "max-w-96 bg-blue-200 p-2 m-2 rounded-lg"
                }
              >
                {message.content}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex justify-center border-t-2 py-4 space-x-2">
          <input
            className="w-full border-2 rounded-lg p-2"
            type="text"
            placeholder="Type your message here"
            value={input}
            onChange={handleInputChange}
          />
          <button className="button" onClick={handleSubmit}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
