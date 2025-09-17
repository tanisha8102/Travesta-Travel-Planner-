import { motion } from "framer-motion";
import mountVideo from '../assets/mount.mp4';
import { FaMapMarkedAlt, FaTags, FaHeadset } from 'react-icons/fa';
import LatestNews from '../components/LatestNews';
import InstagramSection from '../components/InstagramSection';
import TravelFooterSection from '../components/Footer';
import TrendingDestinations from '../components/TrendingDestination';


export default function About() {
  const HeroImage = "https://images.unsplash.com/photo-1705383852028-597b0f37b16f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMzfHx8ZW58MHx8fHx8";
  const themeColor = '#c78e44';

  // Framer Motion Variants
  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
  const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } };

  return (
    <div className="w-full overflow-x-hidden">

      {/* Hero Section */}
      <motion.div
        className="relative w-full h-[70vh] sm:h-[80vh] md:h-[90vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div className="relative text-white px-4 font-lato">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3"
            style={{ fontFamily: 'Playfair Display, serif', lineHeight: '2' }}
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Get Ready to <br />
            <span
              style={{
                backgroundColor: themeColor,
                padding: '0.75rem 1rem',
                borderRadius: '0.25rem',
              }}
            >
              Travel the World .
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 text-sm sm:text-sm md:text-md max-w-xl mx-auto"
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Explore new destinations, experience diverse cultures, and create memories that last a lifetime. Discover hidden gems, taste local cuisines, meet new people, and immerse yourself in unforgettable adventures around the globe.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* About Us Section */}
      <div className="max-w-6xl mx-auto py-16 px-6 flex flex-col md:flex-row items-center md:items-start gap-24">
        {/* Images */}
        <div className="relative md:w-1/2 flex justify-center">
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="p-[2px]"
            style={{ backgroundColor: themeColor }}
          >
            <div className="bg-white p-[6px]">
              <img
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?fm=jpg&q=60&w=800"
                alt="Travel Scene"
                className="w-72 md:w-96"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute -bottom-8 -right-10 p-[2px]"
            style={{ backgroundColor: themeColor }}
          >
            <div className="bg-white p-[6px]">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fm=jpg&q=60&w=500"
                alt="Traveler"
                className="w-48 md:w-64"
              />
            </div>
          </motion.div>
        </div>

        {/* Text Content */}
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="md:w-1/2 space-y-6"
        >
          <p className="text-[#c78e44] text-sm">About Us</p>
          <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "Abril Fatface, serif" }}>
            Plan Your <strong>Trip</strong> with Us
          </h2>
          <p className="text-gray-600 text-md leading-relaxed" style={{ lineHeight: "1.8" }}>
            Far far away, behind the word mountains, far from the countries Vokalia
            and Consonantia, there live the blind texts. Separated they live in
            Bookmarksgrove right at the coast of the Semantics, a large language
            ocean. A small river named Duden flows by their place and supplies it
            with the necessary regelialia.
          </p>
          <button
            className="text-white px-6 py-3 rounded-md font-semibold mt-4 hover:brightness-90 transition"
            style={{ backgroundColor: themeColor }}
          >
            READ MORE
          </button>
        </motion.div>
      </div>

      {/* Trending Destinations & Latest News */}
      <TrendingDestinations />
      <LatestNews />

      {/* Video Section */}
      <motion.div
        className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] flex items-center justify-center text-center overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={mountVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div
          className="absolute inset-6 sm:inset-10 pointer-events-none"
          style={{ borderColor: themeColor, borderWidth: '2px', borderStyle: 'solid' }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div className="relative text-white px-2 sm:px-4 font-serif" variants={fadeUp} transition={{ duration: 0.8, ease: "easeOut" }}>
          <h1 className="text-2xl sm:text-3xl md:text-5xl mb-2 sm:mb-3" style={{ fontFamily: 'Abril Fatface, serif' }}>
            Traveling Highlights
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-white-400">
            Your New Traveling Idea
          </p>
        </motion.div>
      </motion.div>

      {/* Info Boxes Section */}
      <motion.div
        className="relative max-w-5xl mx-auto -mt-8 sm:-mt-10 px-2 sm:px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div
          className="text-white shadow-lg flex flex-col md:flex-row justify-between items-center p-4 sm:p-6 md:p-8 gap-4 sm:gap-6 relative overflow-hidden"
          style={{ backgroundColor: themeColor }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20 pointer-events-none"></div>

          {/* Info Box 1 */}
          <motion.div className="relative z-10 flex items-start text-left flex-1 gap-2 sm:gap-4" variants={fadeUp} transition={{ duration: 0.8, ease: "easeOut" }}>
            <FaMapMarkedAlt className="text-2xl sm:text-3xl md:text-4xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-sm sm:text-md mb-1 sm:mb-2">700+ DESTINATIONS</h3>
              <p className="text-xs sm:text-sm">
                Far far away, behind the word mountains, far countries Vokalia.
              </p>
            </div>
          </motion.div>

          {/* Info Box 2 */}
          <motion.div className="relative z-10 flex items-start text-left flex-1 gap-2 sm:gap-4" variants={fadeUp} transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}>
            <FaTags className="text-2xl sm:text-3xl md:text-4xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-sm sm:text-md mb-1 sm:mb-2">BEST PRICE GUARANTEE</h3>
              <p className="text-xs sm:text-sm">
                Far far away, behind the word mountains, far countries Vokalia.
              </p>
            </div>
          </motion.div>

          {/* Info Box 3 */}
          <motion.div className="relative z-10 flex items-start text-left flex-1 gap-2 sm:gap-4" variants={fadeUp} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
            <FaHeadset className="text-2xl sm:text-3xl md:text-4xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-sm sm:text-md mb-1 sm:mb-2">TOP NOTCH SUPPORT</h3>
              <p className="text-xs sm:text-sm">
                Far far away, behind the word mountains, far countries Vokalia.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Instagram & Footer */}
      <InstagramSection />
      <TravelFooterSection />

    </div>
  );
}
