import React from 'react';
import classes from './Rating.module.css';

const Rating = (props) => {
  const returnRating = (rating) => {
    rating = Math.round(rating);
    let ratingStars = '';
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        ratingStars += '★';
      } else {
        ratingStars += '☆';
      }
    }
    return ratingStars;
  };

  return <div className={classes.container}>{returnRating(props.children)}</div>;
};

export default Rating;
