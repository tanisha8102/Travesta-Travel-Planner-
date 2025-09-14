"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // if using react-router
import { Send } from "lucide-react";

export default function Hero() {
  const [plan, setPlan] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!plan.trim()) return;
    navigate(`/trip?query=${encodeURIComponent(plan)}`);
  };

  return (
   <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 pt-20">

      {/* Greeting */}
      <p className="text-gray-500 mb-2">Welcome back, Faris!</p>

      {/* Heading */}
      <h1 className="text-4xl md:text-4xl font-bold text-gray-900 leading-snug max-w-2xl mx-auto font-sans">
        Tell us your{" "}
        <span className="font-serif italic text-blue-600">Travel Plan</span> <br />
        in one sentence
      </h1>

      {/* Input */}
      <div className="mt-8 w-full max-w-2xl flex items-center bg-white shadow-lg rounded-full border px-4 py-3">
        <input
          type="text"
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
          placeholder="Weekend getaway for two in Bali on a budget..."
          className="flex-grow outline-none px-2 text-gray-700"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
        >
          <Send size={20} />
        </button>
      </div>

      {/* Suggested Tags */}
      <div className="mt-6 flex flex-wrap gap-3 justify-center">
        {[
          "Romantic 3-day trip in Paris",
          "I have 5 days in Japan",
          "I want a 7-day trip to New Zealand",
        ].map((tag) => (
          <button
            key={tag}
            onClick={() => navigate(`/trip?query=${encodeURIComponent(tag)}`)}
            className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-gray-200 transition"
          >
            {tag}
          </button>
        ))}
      </div>
    </section>
  );
}
