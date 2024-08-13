
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageSlider.css'; // Assuming you have an ImageSlider.css for styles

function ImageSlider() {
  // ImageSlider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,         // Enable autoplay
    autoplaySpeed: 1700,    // Set autoplay speed to 2 seconds
    pauseOnHover: false     // Continue autoplay when hovered
  };

  // Slider images
  const sliderImages = [
    'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHN8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1620049302148-61b77ad1a1c2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGRlc3NlcnRzfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1643312769686-00759ba75d7d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGRlc3NlcnRzfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1476887334197-56adbf254e1a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1488474339733-16a5dd4ba5e6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlc3NlcnR8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRlc3NlcnR8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1501747188-61c00b3d8ba0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRlc3NlcnR8ZW58MHx8MHx8fDA%3D',
  ];

  return (
    <div className="App">
      <nav className="navigation">
        <h1 className="category-title">Category</h1>
        <ul className="nav-links">
          <li className="nav-item active">Drinks</li>
          <li className="nav-item">Pizza</li>
          <li className="nav-item">Dessert</li>
          <li className="nav-item">Non Veg</li>
        </ul>
      </nav>
      
      <div className="content">
        <section className="drinks-section">
          <div className="drinks-header">
            <h2>Sandwitch</h2>
            <p>Lorem ipsum dolor sit amet, tetur piscing elit. Suspendisse smod congue bibendum.</p>
          </div>
          <div className="drinks-cards">
            <div className="drinks-card">
              <img src="https://media.istockphoto.com/id/1164282252/photo/healthy-egg-and-celery-sandwiches-on-a-plate.webp?b=1&s=170667a&w=0&k=20&c=4MXVOnBJZx4PAnfShwt5TQ0xJM58Y2hjin_WPk1D2p0=" alt="Drink 1" />
              <div className="card-content">
                <h3>Pizza</h3>
                <p>Lorem ipsum dolor sit amet, tetur piscing elit. Suspendisse smod congue bibendum.</p>
                <p className="price">$42</p>
              </div>
            </div>
            <div className="drinks-card">
              <img src="https://media.istockphoto.com/id/1077760470/photo/pizza-with-cheese-and-tomato-sauce-isolated.webp?b=1&s=170667a&w=0&k=20&c=WocF5H4HoLteQPkYh8xsHLj2JVtiYnhnwWfCGwS325Y=" alt="Drink 2" />
              <div className="card-content">
                <h3>Burger</h3>
                <p>Lorem ipsum dolor sit amet, tetur piscing elit. Suspendisse smod congue bibendum.</p>
                <p className="price">$42</p>
              </div>
            </div>
            <div className="drinks-card">
              <img src="https://media.istockphoto.com/id/1363407092/photo/two-big-homemade-delicious-cheeseburger-with-onion-grilled-bacon-fresh-tomatoes-cheese-and.webp?b=1&s=170667a&w=0&k=20&c=L8KPrtP_vrCDwvotOTA_U_D9tTt74h30Acxbj1kyWyE=" alt="Drink 3" />
              <div className="card-content">
                <h3>Drinks</h3>
                <p>Lorem ipsum dolor sit amet, tetur piscing elit. Suspendisse smod congue bibendum.</p>
                <p className="price">$42</p>
              </div>
            </div>
            <div className="drinks-card">
              <img src="https://media.istockphoto.com/id/915657126/photo/orange-juice-glass-jar-shot-on-rustic-wooden-table.webp?b=1&s=612x612&w=0&k=20&c=w2uxf8MQkSzN-wt7iH9e2pjx7OdkBN3-P8PnfTzV1ko=" alt="Drink 3" />
              <div className="card-content">
                <h3>Orange Juice</h3>
                <p>Lorem ipsum dolor sit amet, tetur piscing elit. Suspendisse smod congue bibendum.</p>
                <p className="price">$42</p>
              </div>
            </div>
            <div className="drinks-card">
            <img src="https://media.istockphoto.com/id/1218434345/photo/watermelon-smoothies-drink.webp?b=1&s=170667a&w=0&k=20&c=oP39SbH_VZ-kIanrZYyIoNyDPPA_jTz5a80uAzvABSY=" alt="Drink 3" />
              <div className="card-content">
                <h3>Watermelon Juice</h3>
                <p>Lorem ipsum dolor sit amet, tetur piscing elit. Suspendisse smod congue bibendum.</p>
                <p className="price">$42</p>
              </div>
            </div>
            <div className="drinks-card">
              <img src="https://media.istockphoto.com/id/1150000171/photo/mango-smoothie-in-a-bottle-with-slices-of-mango-fruit.webp?b=1&s=612x612&w=0&k=20&c=z9sMyCf3lXKHm2rk7phM_ZfwtR6mRPV9xqaurDEl3zM=" alt="Drink 3" />
              <div className="card-content">
                <h3>Mango Juice</h3>
                <p>Lorem ipsum dolor sit amet, tetur piscing elit. Suspendisse smod congue bibendum.</p>
                <p className="price">$42</p>
              </div>
            </div>
          </div>
        </section>

        <div className="image-slider">
          <Slider {...sliderSettings}>
            {sliderImages.map((url, index) => (
              <div key={index}>
                <img src={url} alt={`Slide ${index}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
