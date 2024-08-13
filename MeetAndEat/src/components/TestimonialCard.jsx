// src/components/TestimonialCard.js
import React from 'react';

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

export default TestimonialCard;
