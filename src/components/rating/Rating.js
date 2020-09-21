import React from 'react';
import './Rating.css';

const checkRating = (rating) => {
  switch (rating) {
    case 0:
      return '☆☆☆☆☆';
    case 1:
      return '★☆☆☆☆';
    case 2:
      return '★★☆☆☆';
    case 3:
      return '★★★☆☆';
    case 4:
      return '★★★★☆';
    case 5:
      return '★★★★★';
    default:
      return 'Please enter a valid rating between 1 and 5';
  }
};

const Rating = (props) => {
  const children = parseInt(Math.round(props.children));
  return <div>{checkRating(children)}</div>;
};

export default Rating;
