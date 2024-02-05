import BestSellingEventsSection from "../../componets/BestSellingEventsSection/BestSellingEventsSection";
import HeroSection from "../../componets/HeroSection/HeroSection";
import Footer from "../../componets/UI/Footer/Footer";
import Navbar from "../../componets/UI/Navbar/Navbar";
import UpcomingEventsSection from "../../componets/UpcomingEventsSection/UpcomingEventsSection";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <UpcomingEventsSection />
      <BestSellingEventsSection />
      <Footer />
    </>
  );
};
export default HomePage;
