"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Client {
  name: string;
  role: string;
  feedback: string;
  image: string;
  bg?: string;
}

const clients: Client[] = [
  {
    name: "Pierre Hugo",
    role: "Entrepreneur",
    feedback:
      "Laoreet purus habitant eu vivamus sollicitudin amet conubia ad semper.",
    image:
      "https://images.generated.photos/6Prm4DWHZB98c-seirSy3wZQJMhhFYMfnhYxeekucrE/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODI0MDU3LmpwZw.jpg",
    bg: "https://source.unsplash.com/random/800x600?business&sig=11",
  },
  {
    name: "Alejandro Carlos",
    role: "Fashion Designer",
    feedback: "Interdum in odio eget, pretium vestibulum tellus.",
    image:
      "https://www.youthfit.com/hs-fs/hubfs/01-Althea_New_Pages/gallery/testimonial_headshot.jpg?width=396&height=409&name=testimonial_headshot.jpg",
    bg: "https://source.unsplash.com/random/800x600?fashion&sig=12",
  },
  {
    name: "Melina Marco",
    role: "Actress",
    feedback:
      "Praesent euismod sem a justo convallis, vel facilisis massa rutrum.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN3ZAvTNNhWhSUP58qNoDD9rPM7GQozHO5lTCrp3WfWNARzZUn3BzI3_x3wglpp43T6QQ&usqp=CAU",
    bg: "https://source.unsplash.com/random/800x600?actress&sig=13",
  },
  {
    name: "Hellen Smith",
    role: "CEO",
    feedback:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
    image:
      "https://www.youthfit.com/hs-fs/hubfs/01-Althea_New_Pages/gallery/testimonial_headshot.jpg?width=396&height=409&name=testimonial_headshot.jpg",
    bg: "https://source.unsplash.com/random/800x600?ceo&sig=14",
  },
];

export default function ClientFeedback() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const primary = "#f0e8dc";
  const overlayColor = "rgba(199, 142, 68, 0.9)";
  const footerBg = "#7B5528";
  const textLight = "#F7F3F0";

  const feedbackBg =
    "https://images.unsplash.com/photo-1501555088652-021faa106b9b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29sbyUyMHRyYXZlbGVyfGVufDB8fDB8fHww";

  return (
    <div className="w-full relative" style={{ color: textLight }}>
      {/* Header */}
      <div className="text-center py-8" style={{ backgroundColor: primary }}>
        <p className="uppercase text-black text-sm sm:text-base md:text-lg">
          Real Stories of Our Clients
        </p>
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-black">
          Trusted Feedback From Satisfied Clients
        </h2>
      </div>

      {/* Feedback Sections */}
      <div
        className="relative w-full h-[500px] flex"
        style={{
          backgroundImage: `url(${feedbackBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {clients.map((client, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setActiveIndex(idx)}
            onMouseLeave={() => setActiveIndex(null)}
            className="relative flex-1 cursor-pointer"
            style={{
              borderRight:
                idx < clients.length - 1 ? `1px solid ${textLight}55` : "",
            }}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
              style={{
                backgroundImage: `url(${client.bg})`,
                opacity: activeIndex === idx ? 1 : 0.6,
              }}
            />

            {/* Animated Overlay Feedback */}
           <AnimatePresence>
  {activeIndex === idx && (
    <motion.div
      className="absolute inset-0 flex flex-col justify-end p-6"
      style={{ backgroundColor: overlayColor }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="text-yellow-300 mb-2 text-sm sm:text-base md:text-lg">
        ★★★★★
      </div>
      {/* Responsive Client Name */}
      <h3 className="font-bold mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl truncate">
        {client.name}
      </h3>
      <p className="text-sm sm:text-base md:text-lg">{client.feedback}</p>
    </motion.div>
  )}
</AnimatePresence>


          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        className="relative flex w-full"
        style={{ backgroundColor: footerBg }}
      >
        {clients.map((client, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center relative flex-grow p-2"
            style={{ flexBasis: "0", flexGrow: 1 }}
          >
            {/* Vertical Line */}
            {idx < clients.length - 1 && (
              <div
                className="absolute top-0 right-0 h-full"
                style={{ width: "1px", backgroundColor: `${textLight}55` }}
              />
            )}

            <img
              src={client.image}
              alt={client.name}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mb-1 sm:mb-1 border"
              style={{ borderColor: primary }}
            />
            <span className="text-[10px] sm:text-xs font-medium text-white">
              {client.name}
            </span>
            <span
              className="text-[9px] sm:text-[10px]"
              style={{ color: textLight }}
            >
              {client.role}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
