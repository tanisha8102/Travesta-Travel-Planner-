import { Users, MapPin, Briefcase } from "lucide-react";
import image from "../assets/image01.jpg"; // replace with your image

export default function WhyChooseSection() {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side Image + Stats */}
        <div className="relative flex justify-center">
          {/* Main Image */}
          <img
            src={image}
            alt="Traveler"
            className="w-[320px] h-[420px] object-cover  shadow-lg"
          />

         {/* Top Left Card */}
<div className="absolute -top-6 left-8 bg-white/80 backdrop-blur-md shadow-md 
  px-5 py-4 flex flex-col items-start border 
  rounded-tl-3xl rounded-tr-xl rounded-bl-xl rounded-br-3xl w-[140px] h-[80px]">
  <p className="text-xl font-extrabold text-gray-600">5.000+</p>
  <p className="text-xs text-gray-500">Customers</p>
</div>


{/* Bottom Left Card */}
<div className="absolute bottom-6 left-6  bg-white/80 backdrop-blur-md shadow-md 
  px-5 py-4 flex flex-col items-start border 
  rounded-tl-3xl rounded-tr-xl rounded-bl-xl rounded-br-3xl w-[140px] h-[80px]">
  <p className="text-xl font-extrabold text-gray-600">100+</p>
  <p className="text-xs text-gray-500">Tour Guide</p>
</div>

{/* Right Side Card */}
<div className="absolute top-1/3 right-10 bg-white/80 backdrop-blur-md shadow-md 
  px-5 py-4 flex flex-col items-start border 
  rounded-tl-3xl rounded-tr-xl rounded-bl-xl rounded-br-3xl w-[140px] h-[80px]">
  <p className="text-xl font-extrabold text-gray-600">600+</p>
  <p className="text-xs text-gray-500">Destinations</p>
</div>
        </div>

        {/* Right Side Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose <span className="font-serif italic text-blue-600">Travesta</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Tourink has cooperated with countries that provide more than 600 beautiful 
            places for you to enjoy and relax your free time from the hustle and bustle of life. 
            Don’t worry, you won’t get lost because Tourink also provides 100+ professional tour guides. 
            Our 5k+ customers were satisfied with our services. So what are you waiting for? 
            Let’s plan your holiday with us!
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
