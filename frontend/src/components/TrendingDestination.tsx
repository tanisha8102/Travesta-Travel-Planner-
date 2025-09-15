"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function TrendingDestinations() {
  const destinations = [
    { name: "Dubai", image: "https://www.visitdubai.com/-/media/gathercontent/article/t/the-hot-list-families/fallback-image/the-hot-list-families-img-park-header.jpg" },
    { name: "Paris", image: "https://media.istockphoto.com/id/532855876/photo/group-of-people-jumping-on-the-park-under-tour-eiffel.jpg?s=612x612&w=0&k=20&c=ZHFQLJtzctWkFGD5nhcvc_eXZsRX2DyoA2nqG2dsg0k=" },
    { name: "Bali", image: "https://www.introtravel.com/original-media/images/BaliIntro12Day6.width-800.jpg" },
    { name: "Phuket", image: "https://media.istockphoto.com/id/1477838822/photo/cheerful-woman-traveling-with-thai-taxi-boat-and-photographing-with-point-and-shoot-camera.jpg?s=612x612&w=0&k=20&c=8ra1tniwauTh-8UDuqtAest1biV1iOvTLuEe3VsBRGM=" },
    { name: "Singapore", image: "https://images.unsplash.com/photo-1730130856640-3db880ab33b7?w=600&auto=format&fit=crop&q=60" },
    { name: "London", image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80" },
    { name: "New York", image: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_348,q_75,w_618/v1/clients/newyorkstate/City_Climb_Courtesy_of_Edge_ef18fc11-0b78-44d1-9ba5-d8acd68d23f2.jpg" },
  ];

  const card: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="px-4 sm:px-8 py-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="bg-white p-6 sm:p-10 rounded-xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          Trending Destinations
        </h2>

        {/* ✅ Responsive grid without extra rows */}
        <div
          className="
            grid gap-4
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            auto-rows-auto
          "
        >
          {/* Dubai big card */}
         {/* Dubai big card */}
<motion.div
  variants={card}
  className="col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-xl aspect-[4/4]"
>
  <img
    src={destinations[0].image}
    alt={destinations[0].name}
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
    <p className="text-white text-lg font-semibold">{destinations[0].name}</p>
  </div>
</motion.div>

{/* Paris */}
<motion.div
  variants={card}
  className="relative overflow-hidden rounded-xl"
>
  <img
    src={destinations[1].image}
    alt={destinations[1].name}
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
    <p className="text-white text-lg font-semibold">{destinations[1].name}</p>
  </div>
</motion.div>

{/* Bali */}
<motion.div
  variants={card}
  className="relative overflow-hidden rounded-xl"
>
  <img
    src={destinations[2].image}
    alt={destinations[2].name}
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
    <p className="text-white text-lg font-semibold">{destinations[2].name}</p>
  </div>
</motion.div>

          {/* Phuket */}
          <motion.div variants={card} className="relative overflow-hidden rounded-xl">
            <img src={destinations[3].image} alt={destinations[3].name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">{destinations[3].name}</p>
            </div>
          </motion.div>

          {/* Singapore */}
          <motion.div variants={card} className="relative overflow-hidden rounded-xl">
            <img src={destinations[4].image} alt={destinations[4].name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">{destinations[4].name}</p>
            </div>
          </motion.div>

{/* London */}
<motion.div
  variants={card}
  className="col-span-1 sm:col-span-2 lg:col-span-2 relative overflow-hidden rounded-xl"
>
  <img
    src={destinations[5].image}
    alt={destinations[5].name}
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
    <p className="text-white text-lg font-semibold">{destinations[5].name}</p>
  </div>
</motion.div>

{/* New York */}
<motion.div
  variants={card}
  className="col-span-1 sm:col-span-2 lg:col-span-2 relative overflow-hidden rounded-xl"
>
  <img
    src={destinations[6].image}
    alt={destinations[6].name}
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
    <p className="text-white text-lg font-semibold">{destinations[6].name}</p>
  </div>
</motion.div>

        </div>
      </div>
    </motion.section>
  );
}
