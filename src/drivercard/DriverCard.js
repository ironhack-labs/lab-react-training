import React from 'react';
import Rating from '../rating/Rating';
const DriverCard = ({ name, rating, img, car }) => {
  const imgStyle = {
    height: '100px',
    width: '200px',
  };
  const ratingInStars = Rating(rating);
  return (
    <div>
      <p>{name}</p>
      <Rating>{rating}</Rating>
      <img src={img} style={imgStyle} />
      <p>
        {car.model} - {car.licensePlate}
      </p>
    </div>
  );
};

export default DriverCard;
