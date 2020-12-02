import React from 'react';
import Rating from '../Ratings/Rating';
import './DriverCard.css';

const DriverCard = (props) => {
  const { name, rating, img, car } = props;

  return (
    <div className="DriverCard">
      <img src={img} />
      <div className="DriverCardText">
        <h3>{name}</h3>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
