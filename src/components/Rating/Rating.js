import React from 'react';

import './Rating.css';

const Rating = ({ children }) => {

  const intRating = Math.round(+children);

  const starsRating = ("★".repeat(5) + "☆".repeat(5 - intRating)).slice(-5);

  return <h1>{starsRating}</h1>
};

export default Rating;
