import React from 'react';

const Rating = ({ children }) => {
  // Rounding! 
  const roundedValue = Math.round(children);

  // the starrrrs
  const stars = Array(5)
    .fill('☆')
    .map((star, index) => (index < roundedValue ? '★' : '☆'));

  return (
    <div style={{ fontSize: '1.5rem', color: 'gold' }}>
      {stars.join('')}
    </div>
  );
};

export default Rating;