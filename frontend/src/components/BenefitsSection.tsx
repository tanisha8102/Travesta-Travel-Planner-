import { Tag, Headphones, CalendarCheck } from "lucide-react";

export default function BenefitsSection() {
  return (
    <section className="px-4 sm:px-8 mt-10">
      <div className="rounded-2xl py-12 px-6 sm:px-12 text-center" style={{ backgroundColor: '#f0e8dc' }}>
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
          Experience the Benefits of Travesta
        </h2>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
          {/* Exclusive Offers */}
          <div>
            <Tag className="mx-auto mb-4" size={28} style={{ color: '#c78e44' }} />
            <h3 className="font-semibold text-gray-900 mb-2">Exclusive Offers</h3>
            <p className="text-sm text-gray-600">
              Access special deals and discounts available only through TripZen
            </p>
          </div>

          {/* Customer Support */}
          <div>
            <Headphones className="mx-auto mb-4" size={28} style={{ color: '#c78e44' }} />
            <h3 className="font-semibold text-gray-900 mb-2">24/7 Customer Support</h3>
            <p className="text-sm text-gray-600">
              We’re here for you around the clock, ready to help whenever you need it
            </p>
          </div>

          {/* Seamless Integration */}
          <div>
            <CalendarCheck className="mx-auto mb-4" size={28} style={{ color: '#c78e44' }} />
            <h3 className="font-semibold text-gray-900 mb-2">Seamless Integration</h3>
            <p className="text-sm text-gray-600">
              Manage your bookings, itinerary, and travel plans all in one place
            </p>
          </div>
        </div>

        {/* Button */}
        <button
          className="px-6 py-2 font-medium rounded-full transition"
          style={{ 
            border: '1px solid #c78e44', 
            color: '#c78e44',
            backgroundColor: 'transparent' 
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#c78e44';
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#c78e44';
          }}
        >
          Find Trip
        </button>
      </div>
    </section>
  );
}
