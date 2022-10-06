import React from 'react';

const Rating = ({ children }) => {
  let roundNum = Math.round(children);
  let rating;

  switch (roundNum) {
    case 1:
      rating = `★☆☆☆☆`;
      break;
    case 2:
      rating = `★★☆☆☆`;
      break;
    case 3:
      rating = `★★★☆☆`;
      break;
    case 4:
      rating = `★★★★☆`;
      break;
    case 5:
      rating = `★★★★★`;
      break;
    default:
      rating = `☆☆☆☆☆`;
      break;
  }

  return (
    <div>
      <p>{rating}</p>
    </div>
  );
};

export default Rating;
