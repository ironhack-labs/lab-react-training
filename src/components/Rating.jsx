import React from 'react';

const Rating = ({ children }) => {
  const numOfStars = Math.round(children);
  const stars = '★'.repeat(numOfStars) + '☆'.repeat(5 - numOfStars);
  return <div>{stars}</div>;
};

export default Rating;
