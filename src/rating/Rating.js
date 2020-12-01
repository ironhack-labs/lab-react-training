import React from 'react';

const Rating = ({ children }) => {
  let round = Math.round(children);

  let stars = '';
  switch (round) {
    case 0:
      stars = '☆☆☆☆☆';
    case 1:
      stars = '★☆☆☆☆';
    case 2:
      stars = '★★☆☆☆';
    case 3:
      stars = '★★★☆☆';
    case 4:
      stars = '★★★★☆';
    case 5:
      stars = '★★★★★';
  }

  return <p>{stars}</p>;
};

export default Rating;
