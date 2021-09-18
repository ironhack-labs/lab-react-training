//*☆★*/

import React from 'react';

const Rating = (props) => {
  const stars = [];

  const numberOfFilledStars = Math.round(props.children);
  const numberOfEmptyStars = 5 - numberOfFilledStars;

  if (numberOfFilledStars < 1) {
    return <h1>☆</h1>;
  }

  for (let i = numberOfFilledStars; i > 0; i--) {
    stars.push('★');
  }

  for (let i = numberOfEmptyStars; i > 0; i--) {
    stars.push('☆');
  }
  return <h1>{stars.join('')}</h1>;
};

export default Rating;
