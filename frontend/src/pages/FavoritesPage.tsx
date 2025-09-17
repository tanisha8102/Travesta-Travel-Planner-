// pages/FavoritesPage.tsx
import { useEffect, useState } from "react";
import { Clock, Heart } from "lucide-react";
import ItineraryModal from "../components/ItineraryModal";
import BackButton from "../components/BackButton";

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
  const [favorites, setFavorites] = useState<Itinerary[]>([]);
  const [favMap, setFavMap] = useState<{ [key: string]: boolean }>({});
  const [selectedTrip, setSelectedTrip] = useState<Itinerary | null>(null);
  const token = localStorage.getItem("token");

  const fetchFavorites = async () => {
    if (!token) return;
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/favorites`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data: Itinerary[] = await res.json();
        setFavorites(data);

        const map: { [key: string]: boolean } = {};
        data.forEach((item) => (map[item.title] = true));
        setFavMap(map);
      }
    } catch (err) {
      console.error("Error fetching favorites:", err);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  const toggleFavorite = async (trip: Itinerary) => {
    if (!token) {
      alert("Please login to save favorites");
      return;
    }

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
        const data: Itinerary[] = await res.json();
        setFavorites(data);

        const map: { [key: string]: boolean } = {};
        data.forEach((item) => (map[item.title] = true));
        setFavMap(map);
      }
    } catch (err) {
      console.error("Error toggling favorite:", err);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#fdf6ef] to-[#f9e9d7] pt-20 pb-12">
    

      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-6xl mx-auto px-4 mb-10 flex items-center justify-between">
  {/* Back Button on the left */}
  <BackButton />

  {/* Heading in the center */}
  <h1
    className="text-3xl md:text-4xl font-bold text-gray-900 flex-1 text-center"
    style={{ fontFamily: "Abril Fatface, serif" }}
  >
    My Favorites
  </h1>

  {/* Empty spacer to balance layout */}
  <div className="w-[60px]" /> 
</div>


        {favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-20 text-center text-gray-600">
            <img
              src="/assets/empty-favorites.svg"
              alt="No favorites"
              className="w-60 mb-6"
            />
            <p className="text-lg">You haven’t added any favorites yet.</p>
            <p className="text-sm mt-1 text-gray-500">Explore trips and tap the heart to save your favorites here.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {favorites.map((trip, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden relative cursor-pointer"
                onClick={() => setSelectedTrip(trip)}
              >
                <div
                  className="h-44 bg-cover bg-center transition-transform duration-300 hover:scale-105"
                  style={{ backgroundImage: `url(${trip.imageUrl})` }}
                />
                <div className="p-5 -mt-6 relative bg-white rounded-t-2xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{trip.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Clock size={16} /> {trip.duration}
                  </div>
                  <ul className="text-sm text-gray-600 mb-2 space-y-1">
                    {trip.perks.map((p, idx) => (
                      <li key={idx}>✓ {p}</li>
                    ))}
                  </ul>
                  <div className="mt-3 text-gray-800 font-semibold">
                    From{" "}
                    {trip.oldPrice && (
                      <span className="line-through text-gray-400 mr-2">{trip.oldPrice}</span>
                    )}
                    <span className="text-lg text-green-600">{trip.price}</span>
                    {trip.discount && <p className="text-green-500 text-sm">{trip.discount}</p>}
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(trip);
                  }}
                  className="absolute bottom-3 right-3 text-gray-600 hover:text-red-500 transition-colors"
                >
                  <Heart
                    size={22}
                    fill={favMap[trip.title] ? "red" : "none"}
                    className={favMap[trip.title] ? "text-red-500" : "text-gray-600"}
                  />
                </button>
              </div>
            ))}
          </div>
        )}

        <ItineraryModal
          isOpen={!!selectedTrip}
          onClose={() => setSelectedTrip(null)}
          trip={selectedTrip}
          isFavorite={selectedTrip ? favMap[selectedTrip.title] || false : false}
          onToggleFavorite={() => selectedTrip && toggleFavorite(selectedTrip)}
        />
      </div>
    </div>
  );
}
