import React from 'react';
import Rating from './Rating';
import "./DriverCard.css";

const DriverCard = (props) => {
  const { name, rating, img, car } = props;

  return (
    <div className="driverCard">
      <img src={img} alt={name} className="driverCard-img" />
      <div className="driverCard-info">
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  );
};

export default DriverCard;
