import { Tag, Headphones, CalendarCheck } from "lucide-react";

export default function BenefitsSection() {
  return (
    <section className="px-4 sm:px-8 mt-10">
      <div className="bg-blue-50 rounded-2xl py-12 px-6 sm:px-12 text-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
          Experience the Benefits of Travesta
        </h2>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
          {/* Exclusive Offers */}
          <div>
            <Tag className="mx-auto mb-4 text-blue-700" size={28} />
            <h3 className="font-semibold text-gray-900 mb-2">Exclusive Offers</h3>
            <p className="text-sm text-gray-600">
              Access special deals and discounts available only through TripZen
            </p>
          </div>

          {/* Customer Support */}
          <div>
            <Headphones className="mx-auto mb-4 text-blue-700" size={28} />
            <h3 className="font-semibold text-gray-900 mb-2">24/7 Customer Support</h3>
            <p className="text-sm text-gray-600">
              We’re here for you around the clock, ready to help whenever you need it
            </p>
          </div>

          {/* Seamless Integration */}
          <div>
            <CalendarCheck className="mx-auto mb-4 text-blue-700" size={28} />
            <h3 className="font-semibold text-gray-900 mb-2">Seamless Integration</h3>
            <p className="text-sm text-gray-600">
              Manage your bookings, itinerary, and travel plans all in one place
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="px-6 py-2 border border-blue-600 text-blue-700 font-medium rounded-full hover:bg-blue-600 hover:text-white transition">
          Find Trip
        </button>
      </div>
    </section>
  );
}
