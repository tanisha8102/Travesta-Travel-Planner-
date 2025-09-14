import { Calendar, DollarSign } from "lucide-react";
import { destinations } from "../data/destinations.ts"; // Correct named import

export default function FullDestinationPage() {
  return (
    <section className="px-4 py-12 bg-gradient-to-b from-white to-blue-50 pt-40">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Explore Our Destinations
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((dest, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              {/* Background Image */}
              <img
                src={dest.img}
                alt={dest.city}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl font-semibold">{dest.city}</h3>
                <p className="text-sm opacity-90 mt-1">{dest.desc}</p>

                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  <span className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    <DollarSign size={16} /> {dest.price}
                  </span>
                  <span className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    <Calendar size={16} /> {dest.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
