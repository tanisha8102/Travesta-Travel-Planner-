"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion"; // ✅ type-only import
import bgVideo from "../assets/bg.mp4";


export default function Hero() {
  const [plan, setPlan] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!plan.trim()) return;
    navigate(`/trip?query=${encodeURIComponent(plan)}`);
  };

  // Variants
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  return (
    <motion.section
      className="relative flex flex-col items-center justify-center min-h-[100vh] text-center px-3 pt-20 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 will-change-transform transform-gpu"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 -z-10 pointer-events-none"></div>

      {/* Greeting */}
      <motion.p
        className="text-gray-200 mb-2 text-sm md:text-base"
        variants={fadeUp}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Welcome back, Faris!
      </motion.p>

      {/* Heading */}
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug max-w-xl md:max-w-2xl mx-auto font-sans px-2"
        variants={fadeUp}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Tell us your{" "}
        <span className="font-serif italic" style={{ color: "#e3a857" }}>
          Travel Plan
        </span>
        <br />
        in one sentence
      </motion.h1>

      {/* Input */}
      <motion.div
        className="mt-6 md:mt-8 w-full max-w-md md:max-w-2xl flex items-center bg-white/90 backdrop-blur-sm shadow-lg rounded-full border px-3 md:px-4 py-2 md:py-3"
        variants={fadeUp}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <input
          type="text"
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
          placeholder="Weekend getaway for two in Bali on a budget..."
          className="flex-grow outline-none px-1 md:px-2 text-sm md:text-base text-gray-700 bg-transparent"
        />
        <button
          onClick={handleSubmit}
          className="text-white p-2 md:p-3 rounded-full transition"
          style={{ backgroundColor: "#c78e44" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#b3783b")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#c78e44")
          }
        >
          <Send size={18} className="md:w-5 md:h-5" />
        </button>
      </motion.div>

      {/* Suggested Tags */}
      <motion.div
        className="mt-5 md:mt-6 flex flex-wrap gap-2 md:gap-3 justify-center px-2"
        variants={staggerContainer}
      >
        {[
          "Romantic 3-day trip in Paris",
          "5 days in Goa",
          "I want a 7-day trip to New Zealand",
        ].map((tag) => (
          <motion.button
            key={tag}
            onClick={() => navigate(`/trip?query=${encodeURIComponent(tag)}`)}
            className="px-3 md:px-4 py-1.5 md:py-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-800 text-xs sm:text-sm md:text-base hover:bg-white transition"
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {tag}
          </motion.button>
        ))}
      </motion.div>
    </motion.section>
  );
}
