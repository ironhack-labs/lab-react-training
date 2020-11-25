import React from 'react';
import classes from './DriverCard.module.css';

const DriverCard = (props) => {
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
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer} style={{ backgroundImage: 'url(' + props.img + ')' }}></div>
      <div className={classes.infoContainer}>
        <h2>{props.name}</h2>
        <p>{returnRating(props.rating)}</p>
        <p>
          {props.car.model} &nbsp;
          {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
