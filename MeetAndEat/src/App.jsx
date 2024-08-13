import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ContactPage from "./components/ContactPage";
import Blur from "./components/Blur";
import ImageSlider from "./components/ImageSlider";
import Card from "./components/Card";
import Menu from "./components/Menu";
import SpecialOffer from "./components/SpecialOffer";
import Shop from "./components/Shop";
import Bookt from "./components/Bookt";
import ImageS from "./components/ImageS";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [showContactPage, setShowContactPage] = useState(false);
  const [showShopPage, setShowShopPage] = useState(false);

  const handleNavItemClick = (section) => {
    switch (section) {
      case "about":
        setShowContactPage(false);
        setShowShopPage(false);
        break;
      case "contact":
        setShowContactPage(true);
        setShowShopPage(false);
        break;
      case "menu":
        setShowContactPage(false);
        setShowShopPage(false);
        break;
      case "specialities":
        setShowShopPage(true);
        setShowContactPage(false);
        break;
      case "testimonials":
        setShowContactPage(false);
        setShowShopPage(false);
        break;
      case "instaFeed":
        setShowContactPage(false);
        setShowShopPage(false);
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar handleNavItemClick={handleNavItemClick} />
        <Routes>
          {/* Route for the ContactPage */}
          <Route path="/contact" element={<ContactPage />} />
          {/* Route for the Shop */}
          <Route path="/shop" element={<Shop />} />
          {/* You can define other routes here if needed */}
        </Routes>
        {/* Conditionally render the HeroSection with the ContactPage or Shop */}
        <HeroSection showContactPage={showContactPage} showShopPage={showShopPage} />
        {/* Render other components */}
        <Blur />
        <ImageSlider />
        <Card />
        <Menu />
        <SpecialOffer />
        <Bookt />
        <ImageS />
        <TestimonialsCarousel />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
