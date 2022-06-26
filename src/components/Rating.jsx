import React from 'react';

import './Rating.css';

const Rating = ({ children }) => {
  let rating = '';
  for (let i = 0; i < Math.round(children); i++) {
    rating += '★';
  }

  if (rating.length < 5) {
    const result = 5 - rating.length;
    for (let i = 0; i < result; i++) {
      rating += '☆';
    }
  }

  return <span className="stars">{rating}</span>;
};

export default Rating;
