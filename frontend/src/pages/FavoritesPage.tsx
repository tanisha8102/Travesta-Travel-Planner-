// pages/FavoritesPage.tsx
import { useEffect, useState } from "react";
import { Clock, Heart } from "lucide-react";
import ItineraryModal from "../components/ItineraryModal";
import BackButton from "../components/BackButton";
import Toast from "../components/Toast";
import { AnimatePresence } from "framer-motion";
import noFavorites from "../assets/noFavorites.png";

interface Itinerary {
  days: number;
  title: string;
  duration: string;
  perks: string[];
  price: string;
  discount?: string;
  oldPrice?: string;
  details: string[];
  imageUrl: string;
}

export default function FavoritesPage() {
  const [favoritesList, setFavoritesList] = useState<Itinerary[]>([]);
  const [favoritesMap, setFavoritesMap] = useState<{ [key: string]: boolean }>({});
  const [selectedTrip, setSelectedTrip] = useState<Itinerary | null>(null);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null);

  const token = localStorage.getItem("token");

  // Fetch favorites
  const fetchFavorites = async () => {
    if (!token) return;
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/favorites`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data: Itinerary[] = await res.json();
        setFavoritesList(data);

        const map: { [key: string]: boolean } = {};
        data.forEach((item) => (map[item.title] = true));
        setFavoritesMap(map);
      }
    } catch (err) {
      console.error("Error fetching favorites:", err);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  // Toggle favorite
  const toggleFavorite = async (trip: Itinerary) => {
    if (!token) {
      setToast({
        message: 'Please <a href="/login" class="underline text-blue-600 hover:text-blue-800">login</a> to save trips ❤️',
        type: "info",
      });
      return;
    }

    const isRemoving = favoritesMap[trip.title]; // currently favorited?

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/favorites/toggle`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ itinerary: trip }),
      });

      if (res.ok) {
        const data = await res.json();
        const map: { [key: string]: boolean } = {};
        data.favorites.forEach((item: Itinerary) => (map[item.title] = true));
        setFavoritesMap(map);
        setFavoritesList(data.favorites);

        setToast({
          message: isRemoving ? "Removed from favorites 💔" : "Added to favorites ❤️",
          type: isRemoving ? "error" : "success",
        });
      }
    } catch (err) {
      console.error("Error toggling favorite:", err);
      setToast({ message: "Something went wrong. Please try again.", type: "error" });
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#fdf6ef] to-[#f9e9d7] pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <BackButton />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center flex-1" style={{ fontFamily: "Abril Fatface, serif" }}>
            My Favorites
          </h1>
          <div className="w-[60px]" />
        </div>

        {favoritesList.length === 0 ? (
          <div className="flex justify-center mt-20">
            <img src={noFavorites} alt="No favorites" className="w-60" />
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {favoritesList.map((trip, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden relative">
                <div onClick={() => setSelectedTrip(trip)} className="cursor-pointer">
                  <div className="h-44 bg-cover bg-center" style={{ backgroundImage: `url(${trip.imageUrl})` }} />
                  <div className="p-5 -mt-6 relative bg-white rounded-t-2xl">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{trip.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <Clock size={16} /> {trip.duration}
                    </div>
                    <ul className="text-sm text-gray-600 mb-2 space-y-1">
                      {trip.perks.map((p, idx) => (<li key={idx}>✓ {p}</li>))}
                    </ul>
                    <div className="mt-3 text-gray-800 font-semibold">
                      From {trip.oldPrice && <span className="line-through text-gray-400 mr-2">{trip.oldPrice}</span>}
                      <span className="text-lg text-green-600">{trip.price}</span>
                      {trip.discount && <p className="text-green-500 text-sm">{trip.discount}</p>}
                    </div>
                  </div>
                </div>

                {/* Heart Button */}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(trip);
                  }}
                  className="absolute bottom-3 right-3 text-gray-600 hover:text-red-500 transition-colors cursor-pointer"
                >
                  <Heart size={22} fill={favoritesMap[trip.title] ? "red" : "none"} className={favoritesMap[trip.title] ? "text-red-500" : "text-gray-600"} />
                </div>
              </div>
            ))}
          </div>
        )}

        <ItineraryModal
          isOpen={!!selectedTrip}
          onClose={() => setSelectedTrip(null)}
          trip={selectedTrip}
          isFavorite={selectedTrip ? favoritesMap[selectedTrip.title] || false : false}
          onToggleFavorite={() => selectedTrip && toggleFavorite(selectedTrip)}
        />

        <AnimatePresence>
          {toast && (
            <Toast
              message={toast.message}
              type={toast.type}
              onClose={() => setToast(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
