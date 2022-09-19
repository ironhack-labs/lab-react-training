import React, { useState } from 'react';
import './Rating.css';

const Rating = () => {
  const [rating, setRating] = useState(0); // store the value of index of the star that is clicked
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
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
