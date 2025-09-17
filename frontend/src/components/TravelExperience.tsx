"use client";
import type { FC, ReactElement } from "react";
import { Utensils, Bed, Headset, Bus, Gift, Plane } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface Feature {
  icon: ReactElement;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Utensils className="w-8 h-8 text-[#c78e44]" />,
    title: "Meal Plans",
    description:
      "Himenaeos sociosqu et feugiat tempus aliquet ac penatibus ultricies.",
  },
  {
    icon: <Bed className="w-8 h-8 text-[#c78e44]" />,
    title: "Lodging",
    description:
      "Euismod felis enim risus id lacinia montes, imperdiet facilisi.",
  },
  {
    icon: <Headset className="w-8 h-8 text-[#c78e44]" />,
    title: "Travel Assistance",
    description:
      "Aliquet parturient faucibus pharetra porttitor hendrerit euismod natoque.",
  },
  {
    icon: <Bus className="w-8 h-8 text-[#c78e44]" />,
    title: "Transportation",
    description:
      "Sagittis lorem donec eget dignissim odio. Mattis sociosqu nibh risus taciti.",
  },
  {
    icon: <Gift className="w-8 h-8 text-[#c78e44]" />,
    title: "Upgrades & Freebies",
    description:
      "Fringilla muscura mauris, parturient pulvinar. Imperdiet efficitur integer.",
  },
  {
    icon: <Plane className="w-8 h-8 text-[#c78e44]" />,
    title: "Airport Transfers",
    description:
      "Luctus himenaeos diam erat sit duis netus, nisl posuere fermentum.",
  },
];

// Variants with correct easing
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const TravelExperience: FC = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center py-12 px-6 lg:px-16 gap-12">
      {/* Left Side - Image */}
      <div className="w-full lg:w-1/2">
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzb3J0fGVufDB8fDB8fHww"
            alt="Hello Summer"
            className="w-full h-full object-cover"
          />
          {/* Overlay text */}
          <div className="absolute top-6 left-6 text-white">
            <h3 className="text-3xl font-bold">Hello</h3>
            <p className="text-5xl font-semibold text-[#c78e44]">Summer</p>
          </div>
        </div>
      </div>

      {/* Right Side - Features */}
      <div className="w-full lg:w-1/2">
        <p className="uppercase text-sm tracking-widest text-[#c78e44] font-semibold mb-2">
          For hassle-free travel experiences
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: "Abril Fatface, serif" }}>
          All-Inclusive Travel Experience
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: idx * 0.15,
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1], // smooth easeOut cubic-bezier
              }}
              className="bg-gradient-to-br from-[#f4e9db] to-white text-gray-900 p-6 rounded-lg shadow-md"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm opacity-90">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelExperience;
