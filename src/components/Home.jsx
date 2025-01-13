import DonationInfoSection from './DonationInfoSection';
import CarouselSection from './CarouselSection';
import  FeaturesSectionDemo  from './FeaturesSectionDemo';
import GlimpsesSection from './GlimpsesSection';
import InfiniteMovingCards from './infinite';
//import FloatingDock from './FloatingDock';
import Footer from './footer'
const items = [
  
  {
    quote: "Provides users with a centralized platform to learn about blood donation, its importance, and the process involved.",
    name: "John Doe",
    title: "Founder, Blood Bank"
  },
  {
    quote: "Allows users to easily schedule appointments for blood donation at local blood banks or donation camps.",
    name: "Jane Smith",
    title: "Operations Manager, Blood Donor Association"
  },
  {
    quote: "Displays real-time data on the availability of blood in different blood groups at nearby hospitals and blood banks.",
    name: "Sarah Johnson",
    title: "Blood Bank Coordinator"
  },
  {
    quote: "Helps users find nearby donation centers or blood donation drives based on their location using integrated maps.",
    name: "David Lee",
    title: "Technology Specialist, Blood Donation Platform"
  },
  {
    quote: "Matches potential blood donors with hospitals or patients who need specific blood types in an emergency.",
    name: "Emily Davis",
    title: "Patient Care Director, Hospital"
  },
];
const Home = () => {
  return (
    <div>
      
      <CarouselSection />
      <DonationInfoSection />
      <GlimpsesSection/>
      <FeaturesSectionDemo/>
      <InfiniteMovingCards
      items={items}
      direction="left"
      speed="normal"
      pauseOnHover={true}
      className="custom-class"
    />
      <Footer/>
    </div>
  );
};

export default Home;
