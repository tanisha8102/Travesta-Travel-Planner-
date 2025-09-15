"use client";
import { Calendar, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const destinations = [
  {
    country: "Japan",
    city: "Kyoto",
    desc: "Cherry blossoms in full bloom this week!",
    price: "$850 – $1200",
    date: "Now – Apr 5",
    img: "https://images.unsplash.com/photo-1549693578-d683be217e58",
  },
  {
    country: "Indonesia",
    city: "Ubud",
    desc: "Relaxing jungle retreats and fresh mountain air.",
    price: "$400 – $700",
    date: "Apr – Sep",
    img: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
  },
  {
    country: "New Zealand",
    city: "Queenstown",
    desc: "Adventure capital with clear skies this week.",
    price: "$1300 – $1800",
    date: "May – Aug",
    img: "https://images.unsplash.com/photo-1502786129293-79981df4e689",
  },
  {
    country: "France",
    city: "Paris",
    desc: "Perfect for a romantic long weekend getaway.",
    price: "$1000 – $1500",
    date: "Mar – Jun",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },
];

// Variants
const container: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.25,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const card: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function DestinationSection() {
  return (
    <motion.section
      className="px-3 pt-16 pb-12 bg-gradient-to-b from-white to-[#c78e44]/20"

      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex items-center justify-between mb-8"
          variants={card}
        >
          <h2 className="text-2xl font-semibold text-gray-900">
            Where you should go next
          </h2>
          <Link
            to={`/destination`}
            className="font-medium transition"
            style={{ color: "#c78e44" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.textDecoration = "underline")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.textDecoration = "none")
            }
          >
            See more
          </Link>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
        >
          {destinations.map((dest, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              variants={card}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Background Image */}
              <img
                src={dest.img}
                alt={dest.city}
                className="w-full h-56 object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-lg font-bold">{dest.city}</h3>
                <p className="text-sm opacity-90">{dest.desc}</p>

                <div className="mt-3 space-y-1 text-sm">
                  <p className="flex items-center gap-1">
                    <DollarSign size={14} /> {dest.price}
                  </p>
                  <p className="flex items-center gap-1">
                    <Calendar size={14} /> {dest.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
