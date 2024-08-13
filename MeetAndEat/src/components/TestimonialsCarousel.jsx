import './TestimonialsCarousel.css';
import React from 'react';

const testimonials = [
  {
    name: 'Samuel Thomas',
    rating: 3,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem.',
  },
  {
    name: 'Evylin Brown',
    rating: 3,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem.',
  },
  {
    name: 'John Smith',
    rating: 1,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem.',
  },
  {
    name: 'Ajay',
    rating: 2,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem.',
  },
];

const TestimonialCard = ({ name, rating, review }) => {
  return (
    <div className="testimonial-card">
      <h3>{name}</h3>
      <div className="rating">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className={i < rating ? 'filled-star' : 'empty-star'}>★</span>
        ))}
      </div>
      <p>{review}</p>
    </div>
  );
};

const TestimonialsCarousel = () => {
  return (
    <div className="carousel-container">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  );
};

export default TestimonialsCarousel;
