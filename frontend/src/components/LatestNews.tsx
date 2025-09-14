
import { motion } from 'framer-motion';

const newsItems = [
  {
    title: "Things to See and Do When...",
    date: "June 6, 2020",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fm=jpg&q=60&w=800",
  },
  {
    title: "Travel the Most Beautiful...",
    date: "May 18, 2020",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fm=jpg&q=60&w=800",
  },
  {
    title: "Journeys are Best Measured i...",
    date: "April 5, 2020",
    image: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?fm=jpg&q=60&w=800",
  },
];

export default function LatestNews() {
  return (
    <motion.section
      className="max-w-6xl mx-auto px-6 py-12"
      initial={{ x: 200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-[#c78e44] text-sm mb-1">Latest News</p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: 'Abril Fatface, serif' }}
          >
            Learn More <span className="font-semibold">About Tours</span>
          </h2>
        </div>
        <button
          className="bg-[#c78e44] text-white px-6 py-2 rounded-md hover:brightness-90 transition"
        >
          LEARN MORE
        </button>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg group cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm mt-1">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
