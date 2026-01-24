import AboutUs from "./Components/AboutUs";
import AdminPage from "./Components/AdminPage";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import HowWeWork from "./Components/HowWeWork";
import Navbar from "./Components/Navbar";
import ProblemSolutionSection from "./Components/ProblemSolutionSection";
import AmaPkgs from './Components/AmaPkgs'
import Affiliates from "./Components/Affiliates";
import PromotionsCarousel from "./Components/PromoCarousal";
const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* <Affiliates /> */}
      {/* <PromotionsCarousel /> */}
      <ProblemSolutionSection />
      <HowWeWork />
      <AboutUs />
      <AmaPkgs />
      <AdminPage />
      <Footer />
      
    </div>
  );
};

export default App;
