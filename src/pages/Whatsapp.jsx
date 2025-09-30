

import { useState } from "react";

export default function SendMessage() {
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    const res = await fetch("http://localhost:7200/api/send-message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ to, message }),
    });
    const data = await res.json();
    console.log("Response:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 space-y-4">
        <h1 className="text-2xl font-semibold text-gray-800 text-center">
          WhatsApp Message Sender
        </h1>

        <input
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="Recipient WhatsApp number (+91...)"
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 resize-none h-24"
        />

        <button
          onClick={sendMessage}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-xl shadow-md transition duration-200"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}
