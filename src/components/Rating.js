import React from 'react';

export default function Rating(props) {
  const rating = Math.round(props.rating);
  let ratingStr = '';
  let i,
    k = 0;
  for (i = 0; i < rating; i++) {
    ratingStr += '★';
  }
  for (k = i; k <= 5; k++) {
    ratingStr += '☆';
  }
  return <div>{ratingStr}</div>;
}
