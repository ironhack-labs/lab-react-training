import React from 'react';

function Rating(props) {
  const { children } = props;
  const finalRating = [];
  for (let i = 0; i <= children; i++) {
    finalRating.push(filledStar);
  }
  finalRating.length <= 5 ? filledStar : emptyStar;
  return <div>(★)</div>;
}

export default Rating;
