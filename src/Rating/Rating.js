import React from 'react';
import './Rating.css';

const Rating = (prop) => {

  let emptyStar = '☆';
  let filledStar = '★';

  const rounded = (rate) => {
    let remaining = rate - Math.floor(rate);
    return (remaining >= 0.5 ? Math.floor(rate) + 1 : Math.floor(rate))
  }

  const showStars = (rate) => filledStar.repeat(rounded(rate)) + emptyStar.repeat(5 - rounded(rate));

  return (
    <div>{showStars(prop.children)}</div>
  );
};

export default Rating;