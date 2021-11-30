import React from 'react';
import './Rating.css';

const Rating = (props) => {
  const { children } = props;

  let ratingStars = '';

  if (children < 0.5) {
    ratingStars = '☆☆☆☆☆';
  } else if (children < 1.5 ) {
    ratingStars = '★☆☆☆☆';
  } else if (children < 2.5 ) {
    ratingStars = '★★☆☆☆';
  } else if (children < 3.5) {
    ratingStars = '★★★☆☆';
  } else if (children < 4.5) {
    ratingStars = '★★★★☆';
  } else {
    ratingStars = '★★★★★';
  }
  return <div className="rating">{ratingStars}</div>;
};

export default Rating;
