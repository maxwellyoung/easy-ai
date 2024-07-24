"use client";
import { useChat } from "ai/react";
import Markdown from "react-markdown";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full h-screen mx-2 stretch p-4">
      <div className="flex-grow overflow-y-auto mb-4">
        {messages.map((m) => (
          <div key={m.id} className="whitespace-pre-wrap my-2">
            <span className="font-bold">
              {m.role === "user" ? "User: " : "AI: "}
            </span>
            <Markdown>{m.content}</Markdown>
          </div>
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="fixed bottom-0 w-full p-2 bg-white border-t border-gray-300"
      >
        <input
          className="w-full rounded border-gray-300 bg-white p-2 text-sm"
          value={input}
          placeholder="Type your message here..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
