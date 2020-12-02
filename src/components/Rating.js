import React from 'react';

function Rating(props) {
  const starRatings = Math.round(props.children);
  const noOfStars = (StarsArray) => {
    return {
      0: '☆☆☆☆☆',
      1: '★☆☆☆☆',
      2: '★★☆☆☆',
      3: '★★★☆☆',
      4: '★★★★☆',
      5: '★★★★★',
    }[StarsArray]
  };
  return (
  <div>
  {noOfStars(starRatings)}
  </div>
  );
};
export default Rating;
