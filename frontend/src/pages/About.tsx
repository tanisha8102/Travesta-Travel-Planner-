
import mountVideo from '../assets/mount.mp4';
import { FaMapMarkedAlt, FaTags, FaHeadset } from 'react-icons/fa';
import LatestNews from '../components/LatestNews';
import InstagramSection from '../components/InstagramSection';
import { motion } from "framer-motion";
import TravelFooterSection from '../components/Footer';
import TrendingDestinations from '../components/TrendingDestination';

export default function About() {
  const HeroImage = "https://images.unsplash.com/photo-1705383852028-597b0f37b16f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMzfHx8ZW58MHx8fHx8";

  const themeColor = '#c78e44'; // Your new theme color

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative w-full h-[90vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-white px-4 font-lato">
          <h1
            className="text-3xl md:text-5xl font-bold mb-3"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Get Ready to Travel the World
          </h1>
        </div>
      </div>

     {/* About Us Section */}
<div className="max-w-6xl mx-auto py-16 px-6 flex flex-col md:flex-row items-center md:items-start gap-24">
  {/* Images */}
  <div className="relative md:w-1/2 flex justify-center">
    {/* Large Image */}
    <motion.div
      initial={{ x: -150, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`p-[2px]`}
      style={{ backgroundColor: themeColor }}
    >
      <div className="bg-white p-[6px] ">
        <img
          src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?fm=jpg&q=60&w=800"
          alt="Travel Scene"
          className="w-72 md:w-96"
        />
      </div>
    </motion.div>

    {/* Small Image */}
    <motion.div
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      viewport={{ once: true }}
      className="absolute -bottom-8 -right-10 p-[2px]"
      style={{ backgroundColor: themeColor }}
    >
      <div className="bg-white p-[6px] ">
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
    <h2
      className="text-3xl md:text-5xl"
      style={{ fontFamily: "Abril Fatface, serif" }}
    >
      Plan Your <strong>Trip</strong> with Us
    </h2>

    <p
      className="text-gray-600 text-md leading-relaxed"
      style={{ lineHeight: "1.8" }}
    >
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

        {/* Trending Destinations Section */}
        <TrendingDestinations />
        <LatestNews />

      {/* Video Section */}
      <div className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={mountVideo}
          autoPlay
          loop
          muted
        />

        <div className="absolute inset-10 pointer-events-none" style={{ borderColor: themeColor, borderWidth: '2px', borderStyle: 'solid' }}></div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-white px-4 font-serif">
          <h1
            className="text-3xl md:text-5xl mb-3"
            style={{ fontFamily: 'Abril Fatface, serif' }}
          >
            Traveling Highlights
          </h1>
          <p className="text-lg md:text-xl text-white-400">
            Your New Traveling Idea
          </p>
        </div>
      </div>

      {/* Info Boxes Section */}
      <div className="relative max-w-5xl mx-auto -mt-10 px-4">
       <div
  className="text-white shadow-lg flex flex-col md:flex-row justify-between items-center p-8 gap-6 relative overflow-hidden"
  style={{ backgroundColor: themeColor }}
>
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20 pointer-events-none"></div>

  {/* Content */}
  <div className="relative z-10 flex items-start text-left flex-1 gap-4">
    <FaMapMarkedAlt className="text-4xl mt-1 flex-shrink-0" />
    <div>
      <h3 className="font-bold text-md mb-2">700+ DESTINATIONS</h3>
      <p className="text-sm">
        Far far away, behind the word mountains, far countries Vokalia.
      </p>
    </div>
  </div>

  <div className="relative z-10 flex items-start text-left flex-1 gap-4">
    <FaTags className="text-4xl mt-1 flex-shrink-0" />
    <div>
      <h3 className="font-bold text-md mb-2">BEST PRICE GUARANTEE</h3>
      <p className="text-sm">
        Far far away, behind the word mountains, far countries Vokalia.
      </p>
    </div>
  </div>

  <div className="relative z-10 flex items-start text-left flex-1 gap-4">
    <FaHeadset className="text-4xl mt-1 flex-shrink-0" />
    <div>
      <h3 className="font-bold text-md mb-2">TOP NOTCH SUPPORT</h3>
      <p className="text-sm">
        Far far away, behind the word mountains, far countries Vokalia.
      </p>
    </div>
  </div>
</div>


       
      </div>
       <InstagramSection  />
        <TravelFooterSection />

    </div>
  );
}
