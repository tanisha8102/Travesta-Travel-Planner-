import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import jeep1 from "../assets/jeep2.jpg";
import jeep2 from "../assets/jeep1.png";
import jeep3 from "../assets/jeep3.jpg";
import jeep4 from "../assets/jeep4.jpg";
import trek1 from "../assets/trek1.jpg";
import trek2 from "../assets/trek2.jpg";
import trek3 from "../assets/trek3.jpg";
import trek4 from "../assets/trek4.jpg";
import tour1 from "../assets/tour1.jpg";
import tour2 from "../assets/tour2.jpg";
import tour3 from "../assets/tour3.jpg";
import tour4 from "../assets/tour4.jpg";
import water1 from "../assets/water1.jpg";
import water2 from "../assets/water2.jpg";
import water3 from "../assets/water3.jpg";
import water4 from "../assets/water4.jpg";

const categories = [
  "Trekking Adventure",
  "Jeep Exploration",
  "Cultural Insights Tour",
  "Water Adventure",
];

const packages = [
  { id: 1, image: jeep1, title: "Bromo Caldera Drive", desc: "Explore the vast caldera of Mount Bromo in a sturdy Jeep.", category: "Jeep Exploration" },
  { id: 2, image: jeep2, title: "Mountain Sunrise Trip", desc: "Catch the breathtaking sunrise from Mount Bromo peak.", category: "Jeep Exploration" },
  { id: 3, image: jeep3, title: "Cultural Village Tour", desc: "Discover Tenggerese culture and traditions.", category: "Jeep Exploration" },
  { id: 4, image: jeep4, title: "Jeep Canyon Ride", desc: "Adrenaline-pumping ride through scenic canyons.", category: "Jeep Exploration" },
  { id: 5, image: tour1, title: "Village Walk", desc: "Engage with locals and explore traditions.", category: "Cultural Insights Tour" },
  { id: 6, image: trek1, title: "Forest Hike", desc: "Hike beautiful trails in nature.", category: "Trekking Adventure" },
  { id: 7, image: trek2, title: "Hilltop Trek", desc: "Scenic views from the hills.", category: "Trekking Adventure" },
  { id: 8, image: trek3, title: "River Trail", desc: "Adventure along riverside paths.", category: "Trekking Adventure" },
  { id: 9, image: trek4, title: "Mountain Trek", desc: "Challenging trek in the mountains.", category: "Trekking Adventure" },
  { id: 10, image: tour2, title: "Temple Tour", desc: "Discover ancient heritage sites.", category: "Cultural Insights Tour" },
  { id: 11, image: tour3, title: "Market Tour", desc: "Experience bustling local markets.", category: "Cultural Insights Tour" },
  { id: 12, image: tour4, title: "Cultural Show", desc: "Enjoy traditional performances.", category: "Cultural Insights Tour" },
  { id: 13, image: water1, title: "Rafting Adventure", desc: "Enjoy thrilling water activities.", category: "Water Adventure" },
  { id: 14, image: water2, title: "Beach Relax", desc: "Relax and enjoy water adventures.", category: "Water Adventure" },
  { id: 15, image: water3, title: "Surfing Fun", desc: "Perfect spot for water sports.", category: "Water Adventure" },
  { id: 16, image: water4, title: "Diving Trip", desc: "Adventure under the waves.", category: "Water Adventure" },
];

export default function TravelPackages() {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [desktopIndex, setDesktopIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  // const slideCount = categories.length;


  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const groupedPackages = categories.map(cat =>
    packages.filter(pkg => pkg.category === cat)
  );

  const currentPackages = groupedPackages[categoryIndex];
  const totalDesktopGroups = Math.ceil(currentPackages.length / 4) || 1;

  // --- Mobile navigation
  const handlePrevCard = () => {
    setMobileIndex(prev =>
      prev === 0 ? currentPackages.length - 1 : prev - 1
    );
  };
  const handleNextCard = () => {
    setMobileIndex(prev =>
      prev === currentPackages.length - 1 ? 0 : prev + 1
    );
  };

  // --- Desktop navigation (4 per view)
// --- Desktop arrows should switch categories ---
const handlePrevDesktop = () => {
  setCategoryIndex(prev => (prev === 0 ? categories.length - 1 : prev - 1));
  setMobileIndex(0);
  setDesktopIndex(0);
};

const handleNextDesktop = () => {
  setCategoryIndex(prev => (prev === categories.length - 1 ? 0 : prev + 1));
  setMobileIndex(0);
  setDesktopIndex(0);
};


  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: "Abril Fatface, serif" }}>
          Our Tour Package <span className="text-gray-800">Ensures A Seamless</span>
          <br />
          <span className="text-gray-800">And Memorable</span>{" "}
        <span className="text-[#c78e44] font-serif italic">Adventure.</span>

        </h2>

        {/* Category buttons */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat, idx) => (
            <button
              key={cat}
              onClick={() => {
                setCategoryIndex(idx);
                setMobileIndex(0);
                setDesktopIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                idx === categoryIndex
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- Desktop Carousel --- */}
        {!isMobile && (
          <div className="relative w-full overflow-hidden">
            <div
  className="flex transition-transform duration-700 ease-in-out"
  style={{
    transform: `translateX(-${desktopIndex * (100 / totalDesktopGroups)}%)`,
    width: `${totalDesktopGroups * 100}%`,
  }}
>

              {currentPackages.map(pkg => (
                <div
                  key={pkg.id}
                  className="w-1/4 flex-shrink-0 px-2"
                >
                  <div className="w-full h-[340px] rounded-2xl shadow-md bg-white group overflow-hidden relative">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover transition duration-500 group-hover:blur-sm group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-48 h-48 object-cover rounded-full opacity-0 scale-75 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100 shadow-lg absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-white p-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="font-semibold text-gray-900 flex items-center justify-between">
                        {pkg.title}
                        <ArrowRight className="w-5 h-5 text-gray-700" />
                      </h3>
                      <p className="text-sm text-gray-500">{pkg.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop arrows */}
            <button
              onClick={handlePrevDesktop}
              className="w-10 h-10 flex items-center justify-center rounded-full border bg-white shadow absolute left-2 top-1/2 -translate-y-1/2"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={handleNextDesktop}
              className="w-10 h-10 flex items-center justify-center rounded-full border bg-white shadow absolute right-2 top-1/2 -translate-y-1/2"
            >
              <ArrowRight />
            </button>
          </div>
        )}

        {/* --- Mobile Slider (1 per view) --- */}
        {isMobile && (
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${mobileIndex * 100}%)`,
              }}
            >
              {currentPackages.map(pkg => (
                <div key={pkg.id} className="w-full flex-shrink-0">
                  <div className="relative w-full h-[340px] rounded-2xl shadow-md overflow-hidden bg-white">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-4">
                      <h3 className="font-semibold text-gray-900 flex items-center justify-between">
                        {pkg.title}
                        <ArrowRight className="w-5 h-5 text-gray-700" />
                      </h3>
                      <p className="text-sm text-gray-600">{pkg.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile arrows */}
            <button
              onClick={handlePrevCard}
              className="w-10 h-10 flex items-center justify-center rounded-full border bg-white shadow absolute left-2 top-1/2 -translate-y-1/2"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={handleNextCard}
              className="w-10 h-10 flex items-center justify-center rounded-full border bg-white shadow absolute right-2 top-1/2 -translate-y-1/2"
            >
              <ArrowRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
