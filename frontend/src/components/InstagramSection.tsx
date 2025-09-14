// InstagramSection.tsx
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const InstagramSection: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=1600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1502786129293-79981df4e689?w=1600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1600&auto=format&fit=crop&q=80",
  ];

  // Duplicate images for seamless loop
  const sliderImages = [...images, ...images];

  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto flex items-center gap-6 px-4 overflow-hidden">
        {/* Instagram Icon */}
        <div className="flex-shrink-0 flex items-center justify-center text-[10rem] text-[#f2d1a4]">
          <FaInstagram />
        </div>

        {/* Text + Slider */}
        <div className="flex-1">
          {/* Heading */}
          <div className="mb-6">
            <p className="text-sm text-yellow-600 font-medium">Instagram</p>
            <h2 className="text-2xl font-bold text-gray-800">Travesta</h2>
          </div>

          {/* Seamless Slider */}
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex gap-2"
              animate={{ x: ["0%", "-50%"] }}   // 👈 shift only half (because we duplicated)
              transition={{
                repeat: Infinity,
                duration: 40,  // 👈 slower & smoother
                ease: "linear",
              }}
            >
              {sliderImages.map((img, idx) => (
                <div
                  key={idx}
                  className="min-w-[150px] md:min-w-[200px] aspect-square overflow-hidden rounded-sm"
                >
                  <img
                    src={img}
                    alt={`Instagram ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
