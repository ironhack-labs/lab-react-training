import React from 'react';

const Rating = (props) => {
  let roundRating = Math.round(props.children);
  let starRating = () => {
    if (roundRating === 0) {
      return '☆☆☆☆☆';
    } else if (roundRating === 1) {
      return '★☆☆☆☆';
    } else if (roundRating === 2) {
      return '★★☆☆☆';
    } else if (roundRating === 3) {
      return '★★★☆☆';
    } else if (roundRating === 4) {
      return '★★★★☆';
    } else {
      return '★★★★★';
    }
  };
  return <div className="Star">{starRating()}</div>;
};

export default Rating;
