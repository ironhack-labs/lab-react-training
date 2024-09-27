import React from 'react';

const Rating = ({ children }) => {
  const maxStars = 5;
  const fullStar = '★';
  const emptyStar = '☆';

  const roundedRating = Math.round(children);
  const filledStars = fullStar.repeat(roundedRating);
  const emptyStars = emptyStar.repeat(maxStars - roundedRating);

  return <div>{filledStars}{emptyStars}</div>;
};

export default Rating;
