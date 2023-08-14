import React from 'react';

const Rating = ({ children }) => {
  const roundedRating = Math.round(children);

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push('★'); // Filled star
    } else {
      stars.push('☆'); // Empty star
    }
  }

  return <div className="rating">{stars.join(' ')}</div>;
};

export default Rating;
