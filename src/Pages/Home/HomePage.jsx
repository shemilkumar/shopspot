import Banner from "../../Components/Banner";
import Features from "../../Components/Features";
import Footer from "../../Components/Footer";
import Hero from "../../Components/Hero";
import Navbar from "../../Components/Navbar";
import SellSection from "../../Components/SellSection";
import Testimonials from "../../Components/Testimonials";

function HomePage() {
  return (
    <div className="flex flex-col">
      <Navbar
        currentPage="Home"
        pages={["Home", "Products", "Sell", "Profile", "Cart"]}
      />
      <Banner />
      <Hero />
      <Features />
      <SellSection />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default HomePage;
