import React, { useEffect, useState } from 'react';
import "./HeroSection.css";
import ContactPage from './ContactPage';
import Shop from './Shop'; // Import the Shop component
import slide1 from "/slide1.jpg";
import slide2 from "/slide2.jpg";
import slide3 from "/slide3.jpg";
import slide4 from "/slide4.jpg";
import slide5 from "/slide5.jpg";
import slide6 from "/slide6.jpg";
import slide7 from "/slide7.jpg";

const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];

const HeroSection = ({ showContactPage, showShopPage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!showContactPage && !showShopPage) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [showContactPage, showShopPage]);

  return (
    <div id="home" className="heroSection">
      {showContactPage ? (
        <ContactPage />
      ) : showShopPage ? (
        <Shop />
      ) : (
        <>
          <div className="slider">
            {images.map((image, index) => (
              <div
                key={index}
                className={`slide ${index === currentIndex ? "active" : ""}`}
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
          </div>
          <div className="text">
            <h1><b>Meet 'n' Eat</b></h1>
            <p className="para">
              "Making ordinary moments extraordinary with great food."
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default HeroSection;
