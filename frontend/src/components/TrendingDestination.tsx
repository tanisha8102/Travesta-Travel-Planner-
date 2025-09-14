"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function TrendingDestinations() {
  const destinations = [
    { name: "Dubai", image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80" },
    { name: "Paris", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80" },
    { name: "Bali", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" },
    { name: "Phuket", image: "https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=800&q=80" },
    { name: "Singapore", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80" },
    { name: "Bangkok", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80" },
    { name: "London", image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80" },
    { name: "Kuala Lumpur", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80" },
  ];

  // Variants for animation
  const container: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const card: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="px-4 sm:px-8 mt-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-md p-6 sm:p-10"
        variants={container}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          Trending Destinations
        </h2>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6"
          variants={container}
        >
          {destinations.map((dest, idx) => (
            <motion.div key={idx} className="text-center" variants={card}>
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-40 sm:h-44 object-cover rounded-xl mb-3 shadow-sm"
              />
              <p className="font-medium text-gray-800">{dest.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
