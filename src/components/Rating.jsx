import React from 'react';

const Rating = ({ children }) => {
  const filledStars = Math.round(children);
  const emptyStars = 5 - filledStars;

  const filledStar = '★';
  const emptyStar = '☆';

  const stars = filledStar.repeat(filledStars) + emptyStar.repeat(emptyStars);

  return <div className="rating">{stars}</div>;
};

export default Rating;

