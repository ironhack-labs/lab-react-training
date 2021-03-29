import React from 'react';
import Rating from './Rating';
import '../assets/css/DriverCard.css';

const DriverCard = ({ name, rating, img, car: { model, licensePlate } }) => {
  return (
    <div className="DriverCard">
      <div className="driver-img">
        <img src={img} alt={name}></img>
      </div>
      <div className="driver-info">
        <h2>{name}</h2>
        <Rating color="white">{rating}</Rating>
        <p>
          {model}-{licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
