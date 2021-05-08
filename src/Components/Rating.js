import React from 'react';

function Rating(props) {
  const { children } = props;
  const roundedRating = Math.round(children);
  const starEmpty = '☆';
  const starFull = '★';
  return (
    <div>
      {starFull.repeat(roundedRating)}
      {starEmpty.repeat(5 - roundedRating)}
    </div>
  );
}

export default Rating;
