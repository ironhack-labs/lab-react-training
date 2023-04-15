import React from 'react';

const Rating = ({ children }) => {
  const roundedRating = Math.round(children);
  const filledStars = '★'.repeat(roundedRating);
  const emptyStars = '☆'.repeat(5 - roundedRating);

  return (
    <div>
      {filledStars}{emptyStars}
    </div>
  );
};

export default Rating;
