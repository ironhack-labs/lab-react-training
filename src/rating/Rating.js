import React from 'react';

const Rating = ({ children }) => {
  const full = Math.round(children);
  const empty = 5 - full;

  const stars = '★'.repeat(full) + '☆'.repeat(empty);

  return (
    <div>
      <p>{stars}</p>
    </div>
  );
};

export default Rating;
