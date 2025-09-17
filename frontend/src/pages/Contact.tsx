"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  CheckCircle,
  Clock,
  Shield,
  Star,
  MailIcon,
  PhoneIcon,
} from "lucide-react";

const heroImages = [
  "https://images.unsplash.com/photo-1584921029340-b86735de3970?q=80&w=1600&auto=format&fit=crop",

];

export default function ContactPage() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section with Slider */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={current}
            src={heroImages[current]}
            alt="Contact Hero"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Centered Text */}
        <div className="relative flex items-center justify-center h-full">
          <h1
            className="text-4xl sm:text-6xl font-bold text-white"
            style={{ fontFamily: "Abril Fatface, serif" }}
          >
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Form + Info Section */}
      <section className="relative bg-white py-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 -mt-32">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white shadow-lg rounded-md p-8">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-500" size={18} />
                <input
                  type="text"
                  placeholder="Full Name *"
                  className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-500" size={18} />
                <input
                  type="email"
                  placeholder="Email *"
                  className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <Phone className="absolute left-3 top-3 text-gray-500" size={18} />
                <input
                  type="text"
                  placeholder="Phone *"
                  className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none"
                />
              </div>

              {/* Services */}
              <div className="relative">
                <Briefcase className="absolute left-3 top-3 text-gray-500" size={18} />
                <input
                  type="text"
                  placeholder="Services *"
                  className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none"
                />
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  className="bg-[#c78e44] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#a8702c]"
                  type="submit"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>

          {/* Right Side Boxes */}
          <div className="space-y-6">
            {/* Why Book With Us */}
            <div className="bg-white shadow-md p-6 rounded-md">
              <h3 className="font-semibold text-gray-800 mb-4">
                WHY BOOK WITH US?
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#c78e44]" /> Best Price
                  Guarantee
                </li>
                <li className="flex items-center gap-2">
                  <Clock size={16} className="text-[#c78e44]" /> Customer care
                  available 24/7
                </li>
                <li className="flex items-center gap-2">
                  <Shield size={16} className="text-[#c78e44]" /> Free Travel
                  Insurance
                </li>
                <li className="flex items-center gap-2">
                  <Star size={16} className="text-[#c78e44]" /> Hand-picked Tours &
                  Activities
                </li>
              </ul>
            </div>

            {/* Get a Question */}
            <div className="bg-[#c78e44] text-white shadow-md p-6 rounded-md">
              <h3 className="font-semibold mb-3">GET A QUESTION?</h3>
              <p className="text-sm mb-4">
                Do not hesitate to give us a call. We are an expert team and we are
                happy to talk to you.
              </p>
              <p className="flex items-center gap-2 mb-2">
                <MailIcon size={16} /> holidayplanners@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <PhoneIcon size={16} /> +123 456 7890
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
