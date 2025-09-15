import Hero from "../components/Hero";
import DestinationSection from "../components/DestinationSection";
import WhyChooseSection from "../components/WhyChooseSection";
import TravelPackages from "../components/TourPackages";
import Footer from "../components/Footer";
import BenefitsSection from "../components/BenefitsSection";
import TrendingDestinations from "../components/TrendingDestination";
import TravelExperience from "../components/TravelExperience";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      
        <Hero />
     

      {/* Destination Section */}
    
        <DestinationSection />
     

      {/* Why Choose Section */}
     
        <WhyChooseSection />

      {/* Trending Destinations */}
        <TrendingDestinations />
      {/* Benefits Section */}
     
        <BenefitsSection />
     

      {/* Travel Packages */}
  
        <TravelPackages />

      {/* Travel Experience Section */}
     
        <TravelExperience />
      

      {/* Footer */}
        <Footer />
   
    </div>
  );
}
