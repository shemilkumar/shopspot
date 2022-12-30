// import React from "react";
import React, { useState } from "react";
import Banner from "../../Components/Banner";
import Features from "../../Components/Features";
import Footer from "../../Components/Footer";
import Hero from "../../Components/Hero";
import Navbar from "../../Components/Navbar";
import SellSection from "../../Components/SellSection";
import Testimonials from "../../Components/Testimonials";
import Alert from "../../Helper/Alert";

function HomePage() {
  const [showAlert, setShowAlert] = useState(false);
  const alertShow = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1750);
  };

  return (
    <div className="flex flex-col">
      {showAlert && <Alert message="Product added to the cart." />}
      <Navbar
        currentPage="Home"
        pages={["Home", "Products", "Sell", "Profile", "Cart"]}
      />
      <Banner />
      <Hero alertShow={alertShow} />
      <Features />
      <SellSection />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default HomePage;
