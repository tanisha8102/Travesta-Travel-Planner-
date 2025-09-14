import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function TravelFooterSection() {
  return (
   <div className="bg-gray-50"> 
      {/* Hero Section with Image */}
      <div className="px-4 sm:px-8 mt-6">
        <div
          className="relative h-72 sm:h-96 bg-cover bg-center flex items-center justify-center text-center rounded-2xl overflow-hidden"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')", // replace with your image
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" /> 
          
          {/* Content */}
          <div className="relative z-10 px-4 sm:px-6 max-w-2xl text-white">
            <h1 className="text-2xl sm:text-4xl font-bold mb-3">
              Find your zen <br /> in travel with Travesta
            </h1>
            <p className="mb-6 text-sm sm:text-base text-gray-200">
              Book now and set off on your next adventure with confidence
            </p>
            <button className="px-5 py-2 bg-white text-black font-semibold rounded-full shadow hover:bg-gray-100 transition">
              Start Planning
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Company */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">About us</a></li>
                <li><a href="#" className="hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900">Press</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact us</a></li>
                <li><a href="#" className="hover:text-gray-900">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Travel Services */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Travel Services</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Flights</a></li>
                <li><a href="#" className="hover:text-gray-900">Hotels</a></li>
                <li><a href="#" className="hover:text-gray-900">Car Rentals</a></li>
                <li><a href="#" className="hover:text-gray-900">Activities & Tours</a></li>
                <li><a href="#" className="hover:text-gray-900">Vacation Packages</a></li>
              </ul>
            </div>

            {/* Travel Resources */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Travel Resources</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Travel Guides</a></li>
                <li><a href="#" className="hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900">FAQs</a></li>
                <li><a href="#" className="hover:text-gray-900">Travel Insurances</a></li>
                <li><a href="#" className="hover:text-gray-900">Packing Tips</a></li>
              </ul>
            </div>

            {/* Customer Support */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Customer Support</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Live Chat</a></li>
                <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-900">Manage Bookings</a></li>
                <li><a href="#" className="hover:text-gray-900">Cancellation & Refunds</a></li>
              </ul>
            </div>

            {/* Logo & Social */}
            <div className="flex flex-col items-start lg:items-end justify-between">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Travesta</h2>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-gray-500 hover:text-gray-900"><Instagram size={20} /></a>
                <a href="#" className="text-gray-500 hover:text-gray-900"><Facebook size={20} /></a>
                <a href="#" className="text-gray-500 hover:text-gray-900"><Twitter size={20} /></a>
                <a href="#" className="text-gray-500 hover:text-gray-900"><Youtube size={20} /></a>
              </div>
              <p className="text-xs text-gray-500">© 2024 TRAVESTA INC. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
