// src/ImageSlider.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageS.css';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1530524428108-f983ca74ad0f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFzdGZvb2R8ZW58MHx8MHx8fDA%3D',
    alt: 'Kitchen',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1672774750509-bc9ff226f3e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmFzdGZvb2R8ZW58MHx8MHx8fDA%3D',
    alt: 'Kitchen',
  },
  {
    src: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNhbGFkfGVufDB8fDB8fHww',
    alt: 'Cafe',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1663853293942-a11f5c8dd424?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hvY29sYXRlJTIwc21vb3RoaWV8ZW58MHx8MHx8fDA%3D',
    alt: 'Pizza',
  },
  {
    src: 'https://images.unsplash.com/photo-1508737804141-4c3b688e2546?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNob2NvbGF0ZSUyMHNoYWtlfGVufDB8fDB8fHww',
    alt: 'French Toast',
  },
  {
    src: 'https://media.istockphoto.com/id/503818102/photo/mediterranean-pizza.webp?b=1&s=170667a&w=0&k=20&c=F5nwKQCJcd6yYiKnTokUHmb856YLNI2kZuU76af083E=',
    alt: 'Salad',
  },
];

const ImageS = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="image-sliders">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <img src={image.src} alt={image.alt} className="image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageS;
