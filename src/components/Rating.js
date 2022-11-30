import React from 'react';

const Rating = ({ children }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (Math.round(children) >= i) {
      stars.push(<i class="fa-solid fa-star"></i>);
    } else {
      stars.push(<i class="fa-regular fa-star"></i>);
    }
  }
  return <div>{stars}</div>;
};

export default Rating;
