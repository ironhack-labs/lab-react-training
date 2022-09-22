import React from 'react';
import './Rating.css';
import { useState } from 'react';

const Rating = () => {
  const [rating, setRating] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="buttom"
            key={index}
            className={index <= rating ? 'on' : 'off'}
            onClick={() => setRating(index)}
          >
            <span>&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};
export default Rating;
