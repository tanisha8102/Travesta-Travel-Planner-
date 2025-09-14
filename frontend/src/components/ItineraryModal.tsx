import { X, Info, Clock, Calendar } from "lucide-react";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ItineraryModalProps {
  isOpen: boolean;
  onClose: () => void;
  trip: {
    title: string;
    duration: string;
    perks: string[];
    price: string;
    oldPrice?: string;
    discount?: string;
    details: string[];
    imageUrl: string;
  } | null;
}

export default function ItineraryModal({ isOpen, onClose, trip }: ItineraryModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!trip) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex justify-center items-start pt-12 bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-white rounded-t-2xl rounded-b-2xl shadow-2xl w-full max-w-lg h-[85vh] flex flex-col overflow-hidden"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition-colors z-10"
            >
              <X size={22} />
            </button>

            {/* Sticky Image Header */}
            <div
              className="h-48 bg-cover bg-center sticky top-0 z-0"
              style={{ backgroundImage: `url(${trip.imageUrl})` }}
            >
              <div className="h-full w-full bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6 scrollbar-hide">
              {/* Title & Duration */}
              <div>
                <h2 className="text-xl font-bold text-gray-900">{trip.title}</h2>
                <div className="flex items-center gap-2 text-gray-500 mt-1 text-sm">
                  <Clock size={16} /> {trip.duration}
                </div>
              </div>

              {/* Perks */}
              <div className="flex flex-wrap gap-2">
                {trip.perks.map((p, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs bg-green-50 text-green-700 rounded-full border border-green-200"
                  >
                    {p}
                  </span>
                ))}
              </div>

              {/* Price */}
              <div>
                {trip.oldPrice && (
                  <span className="line-through text-gray-400 mr-2">{trip.oldPrice}</span>
                )}
                <span className="text-lg font-semibold text-green-600">{trip.price}</span>
                {trip.discount && (
                  <p className="text-green-500 text-xs mt-1">{trip.discount}</p>
                )}
              </div>

              {/* Itinerary */}
              <div>
                <h4 className="flex items-center gap-2 font-semibold text-[#c78e44] mb-3 text-sm">
  <Info size={16} /> Itinerary
</h4>

                <div className="relative pl-4 space-y-4" style={{ borderLeft: '2px solid #c78e44' }}>

                  {trip.details.map((d, idx) => (
                    <div key={idx} className="relative">
                   <div className="absolute -left-2 top-1 w-3 h-3 rounded-full border-2 border-white shadow-md" style={{ backgroundColor: '#c78e44' }} />

                      <div className="flex items-start gap-2">
                       <Calendar className="mt-0.5 text-[#c78e44]" size={14} />

                        <p className="text-gray-700 text-xs leading-relaxed">{d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
