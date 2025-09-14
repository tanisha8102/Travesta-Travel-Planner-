import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import ItineraryModal from "../components/ItineraryModal";

const UNSPLASH_ACCESS_KEY = "Swz52pBLZgYIQ05a9ySrz3_UP9PXneG3oER2qtUKgiw"; // Replace with your Unsplash Access Key

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

export default function TripPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("query") || "Your Trip";

  const [itinerary, setItinerary] = useState<Itinerary[]>([]);
  const [selectedTrip, setSelectedTrip] = useState<Itinerary | null>(null);
  const [heroImage, setHeroImage] = useState<string>("");
  const [loading, setLoading] = useState(true); // NEW state

  const toTitleCase = (str: string) =>
  str.replace(/\w\S*/g, (txt) =>
    txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
  );


  useEffect(() => {
    const fetchImages = async (searchQuery: string) => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
            searchQuery
          )}&client_id=${UNSPLASH_ACCESS_KEY}`
        );
        const data = await response.json();

        if (data?.results?.length > 0) {
          const fullUrl = `${data.results[0].urls.full}&w=1600&fit=crop&q=80`;

          // Preload and only render once ready
          const img = new Image();
          img.src = fullUrl;
          img.onload = () => {
            setHeroImage(fullUrl);
            setLoading(false); // stop loader
          };
        } else {
          setLoading(false); // no image but stop waiting
        }
      } catch (error) {
        console.error("Error fetching image:", error);
        setLoading(false);
      }
    };

    if (query) {
      fetchImages(query);
      

      const generated: Itinerary[] = [
        {
          days: 2,
          title: "City Highlights Tour",
          duration: "2 days",
          perks: ["Free Cancellation", "Guided Tour"],
          price: "₹5,126",
          oldPrice: "₹5,282",
          discount: "You save 2%",
          details: [
            "Day 1: Arrival, evening city walk, local dinner",
            "Day 2: Explore main attractions & sunset beach view",
          ],
          imageUrl: `src/assets/tour3.jpg`,
          // imageUrl: `https://source.unsplash.com/800x600/?${encodeURIComponent(
          //   locationName
          // )}&${Math.random()}`,
        },
        {
          days: 4,
          title: "Adventure & Culture",
          duration: "4 days",
          perks: ["Instant Confirmation", "Adventure Trip"],
          price: "₹6,758",
          oldPrice: "₹7,384",
          discount: "You save 8%",
          details: [
            "Day 1: Arrival & evening market",
            "Day 2: Guided cultural city tour",
            "Day 3: Adventure activity or day trip",
            "Day 4: Shopping + Relax + Departure",
          ],
          imageUrl: `src/assets/trek4.jpg`,
          // imageUrl: `https://source.unsplash.com/800x600/?adventure,${encodeURIComponent(
          //   locationName
          // )}&${Math.random()}`,
        },
        {
          days: 3,
          title: "Cultural Escape",
          duration: "3 days",
          perks: ["See Museums", "Local Guide"],
          price: "₹1,644",
          oldPrice: "₹1,796",
          discount: "You save 8%",
          details: [
            "Day 1: Museum tour & evening cruise",
            "Day 2: Explore historic sites",
            "Day 3: Relax + Departure",
          ],
          imageUrl: `src/assets/sunrise1.jpg`,                 
           // imageUrl: `https://source.unsplash.com/800x600/?adventure,${encodeURIComponent(
          //   locationName
          // )}&${Math.random()}`,
        },
      ];

      setItinerary(generated);
    }
  }, [query]);

  // If still loading, block everything
if (loading) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-200">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>

      {/* Animated Text */}
      <p className="mt-6 text-gray-700 text-xl font-semibold animate-pulse">
        Planning your trip...
      </p>

      {/* Subtext */}
      <p className="mt-2 text-gray-500 text-sm">
        Finding the best views and experiences 🌍
      </p>
    </div>
  );
}


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="h-72 md:h-[28rem] bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
<h1 className="relative text-3xl md:text-5xl font-bold text-white px-6 py-3 rounded-xl backdrop-sm font-['Raleway'] tracking-wide drop-shadow-lg">
  {toTitleCase(query)}
</h1>


      </div>

      {/* Itinerary Cards */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Itinerary Options</h2>

        <div className="grid md:grid-cols-3 gap-7">
          {itinerary.map((trip, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden cursor-pointer relative"
              onClick={() => setSelectedTrip(trip)}
            >
              {/* Image */}
              <div
                className="h-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${trip.imageUrl})` }}
              ></div>

              {/* Card Overlap Content */}
              <div className="p-5 -mt-6 relative bg-white rounded-t-2xl shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {trip.title}
                </h3>
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
                  <span className="line-through text-gray-400 mr-2">
                    {trip.oldPrice}
                  </span>
                  <span className="text-lg text-green-600">{trip.price}</span>
                  <p className="text-green-500 text-sm">{trip.discount}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ItineraryModal
        isOpen={!!selectedTrip}
        onClose={() => setSelectedTrip(null)}
        trip={selectedTrip}
      />
    </div>
  );
}
