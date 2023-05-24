import React from "react";
import Rating from './Rating';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="driver-card">
      <img  className="driver-image" width='250px' height='250px' src={img} alt="Driver" />
      <div>
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  );
};

export default DriverCard;