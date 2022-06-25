import React from 'react';

const Rating = (props) => {
  const rating = Math.round(props.children);
  let stars = '';
  for (let i = 0; i < rating; i++) {
    stars += '★';
  }
  return <div className="rating">{stars.padEnd(5, '☆')}</div>;
};

export default Rating;
