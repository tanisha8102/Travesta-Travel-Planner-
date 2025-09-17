import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Clock, Search, Heart } from "lucide-react";
import ItineraryModal from "../components/ItineraryModal";
import Groq from "groq-sdk";
import Toast from "../components/Toast";
import { AnimatePresence } from "framer-motion";

const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY as string;

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

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

// Helper functions
const extractLocation = (query: string) => {
  const cleaned = query
    .replace(/\d+(\s*days?)?/gi, "")
    .replace(
      /\b(trip|tour|vacation|travel|want|please|show|me|plan|to|in|for|a|an|the|i)\b/gi,
      ""
    )
    .trim();
  const words = cleaned.split(" ").filter(Boolean);
  if (words.length >= 2)
    return `${words[words.length - 2]} ${words[words.length - 1]}`;
  return words.length ? words[words.length - 1] : query;
};

const toTitleCase = (str: string) =>
  str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase());

export default function TripPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const rawQuery = params.get("query") || "Your Trip";
  const locationName = extractLocation(rawQuery);

  const [itinerary, setItinerary] = useState<Itinerary[]>([]);
  const [selectedTrip, setSelectedTrip] = useState<Itinerary | null>(null);
  const [heroImage, setHeroImage] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState(rawQuery);
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toast, setToast] = useState<{ message: string; type: "success" | "info" | "error" } | null>(null);


  const token = localStorage.getItem("token"); // JWT token for auth

  useEffect(() => {
  if (!token) return;

  const fetchFavoritesAndMark = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/favorites`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) return;

      const data: Itinerary[] = await res.json();
      const favMap = data.reduce<{ [key: string]: boolean }>(
        (acc, item) => ({ ...acc, [item.title]: true }),
        {}
      );

      setFavorites(favMap);
    } catch (err) {
      console.error("Error fetching favorites:", err);
    }
  };

  fetchFavoritesAndMark();
}, [token, itinerary]); // ✅ depends on token + itinerary



  // Fetch user's favorites from backend
  const fetchFavorites = async () => {
    if (!token) return;
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/favorites`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data: Itinerary[] = await res.json();
        const favMap: { [key: string]: boolean } = {};
        data.forEach((item) => (favMap[item.title] = true));
        setFavorites(favMap);
      }
    } catch (err) {
      console.error("Error fetching favorites:", err);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  // Toggle favorite via backend
const toggleFavorite = async (trip: Itinerary) => {
  if (!token) {
    setToast({
      message:
        'Please <a href="/login" class="underline text-blue-600 hover:text-blue-800">login</a> to save trips ❤️',
      type: "info",
    });
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
      const data = await res.json();
      const favMap: { [key: string]: boolean } = {};
      data.favorites.forEach((item: Itinerary) => (favMap[item.title] = true));
      setFavorites(favMap);

      const isRemoving = favorites[trip.title]; // already fav → removing
      setToast({
        message: isRemoving ? "Removed from favorites 💔" : "Added to favorites ❤️",
        type: isRemoving ? "error" : "success",
      });
    }
  } catch (err) {
    console.error("Error toggling favorite:", err);
    setToast({
      message: "Something went wrong. Please try again.",
      type: "error",
    });
  }
};


  // Handle search submit
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate(`/trip?query=${encodeURIComponent(searchValue.trim())}`);
    }
  };

  // Fetch Hero Image
  useEffect(() => {
    const fetchHeroImage = async (searchQuery: string) => {
      try {
        const res = await fetch(
          `https://api.pexels.com/v1/search?query=${encodeURIComponent(searchQuery)}&per_page=1`,
          { headers: { Authorization: PEXELS_API_KEY } }
        );
        const data = await res.json();
        if (data?.photos?.length > 0) {
          const url = data.photos[0].src.landscape;
          const img = new Image();
          img.src = url;
          img.onload = () => setHeroImage(url);
        }
      } catch (err) {
        console.error("Error fetching hero image:", err);
      }
    };

    if (locationName) fetchHeroImage(locationName);
  }, [locationName]);

  // Fetch Itinerary (Groq)
  useEffect(() => {
    const fetchItinerary = async () => {
      setLoading(true);
      try {
        const response = await groq.chat.completions.create({
          model: "meta-llama/llama-4-scout-17b-16e-instruct",
          messages: [
            {
              role: "system",
              content: `You are a travel planner. Return ONLY a valid JSON array of 2–3 trip package objects. Each object must have days, title, duration, perks (array), price, oldPrice?, discount?, details (array).`,
            },
            { role: "user", content: `Generate trip packages for ${locationName}.` },
          ],
          temperature: 0.7,
          max_tokens: 800,
        });

        const text = response.choices[0]?.message?.content || "[]";
        let trips: Itinerary[] = [];
        try {
          const cleaned = text.trim().replace(/```json|```/g, "");
          trips = JSON.parse(cleaned);
        } catch (err) {
          console.error("Error parsing Groq response:", err, text);
        }

        if (!trips.length) {
          trips = [
            {
              days: 3,
              title: "Sample Plan",
              duration: "3 days",
              perks: ["Guide", "Free Cancellation"],
              price: "₹5,000",
              details: ["Day 1: Arrival", "Day 2: Highlights", "Day 3: Departure"],
              imageUrl: "src/assets/tour3.jpg",
            },
          ];
        }

        const tripsWithImages = await Promise.all(
          trips.map(async (trip, i) => {
            try {
              const res = await fetch(
                `https://api.pexels.com/v1/search?query=${encodeURIComponent(
                  trip.title + " " + locationName
                )}&per_page=1`,
                { headers: { Authorization: PEXELS_API_KEY } }
              );
              const data = await res.json();
              return {
                ...trip,
                imageUrl:
                  data.photos?.[0]?.src?.medium ||
                  trip.imageUrl ||
                  ["src/assets/tour3.jpg", "src/assets/trek4.jpg", "src/assets/sunrise1.jpg"][i % 3],
              };
            } catch {
              return trip;
            }
          })
        );

        setItinerary(tripsWithImages);
      } catch (err) {
        console.error("Error fetching itinerary:", err);
      } finally {
        setLoading(false);
      }
    };

    if (locationName) fetchItinerary();
  }, [locationName]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#fdf6ef] to-[#f9e9d7]">
        <div className="w-16 h-16 border-4 border-[#c78e44] border-dashed rounded-full animate-spin"></div>
        <p className="mt-6 text-[#c78e44] text-xl font-semibold animate-pulse">
          Planning your trip...
        </p>
        <p className="mt-2 text-gray-600 text-sm">Finding the best views and experiences 🌍</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="h-72 md:h-[28rem] bg-cover bg-center flex flex-col items-center justify-center relative px-4"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <form
          onSubmit={handleSearch}
          className="relative z-10 mx-auto mt-6 md:-mt-10 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] flex items-center bg-white rounded-full shadow-md overflow-hidden"
        >
          <input
            aria-label="Search destination"
            type="text"
            placeholder="Search for a destination..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="flex-1 px-4 py-2 text-sm sm:px-5 sm:py-3 text-gray-700 focus:outline-none rounded-l-full"
          />
          <button type="submit" className="px-3 sm:px-4 flex items-center justify-center rounded-r-full">
            <Search size={18} className="text-gray-500" />
          </button>
        </form>
        <h1 className="relative z-10 mt-6 text-3xl md:text-5xl font-bold text-white px-6 py-3 rounded-xl backdrop-sm font-['Raleway'] tracking-wide drop-shadow-lg">
          {toTitleCase(locationName)}
        </h1>
      </div>

      {/* Itineraries */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Itinerary Options</h2>
        <div className="grid md:grid-cols-3 gap-7">
          {itinerary.map((trip, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden relative">
              <div className="cursor-pointer" onClick={() => setSelectedTrip(trip)}>
                <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${trip.imageUrl})` }} />
                <div className="p-5 -mt-6 relative bg-white rounded-t-2xl">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{trip.title}</h3>
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
                    {trip.oldPrice && <span className="line-through text-gray-400 mr-2">{trip.oldPrice}</span>}
                    <span className="text-lg text-green-600">{trip.price}</span>
                    {trip.discount && <p className="text-green-500 text-sm">{trip.discount}</p>}
                  </div>
                </div>
              </div>

              {/* Favorite Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(trip);
                }}
                className="absolute bottom-3 right-3 text-gray-600 hover:text-red-500 transition-colors"
              >
                <Heart size={22} fill={favorites[trip.title] ? "red" : "none"} className={favorites[trip.title] ? "text-red-500" : "text-gray-600"} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <ItineraryModal
        isOpen={!!selectedTrip}
        onClose={() => setSelectedTrip(null)}
        trip={selectedTrip}
        isFavorite={selectedTrip ? favorites[selectedTrip.title] || false : false}
        onToggleFavorite={() => selectedTrip && toggleFavorite(selectedTrip)}
      />

    <AnimatePresence>
  {toast && (
    <Toast
      message={toast.message}
      type={toast.type}  // ✅ pass type
      onClose={() => setToast(null)}
    />
  )}
</AnimatePresence>



    </div>
    
  );
}
