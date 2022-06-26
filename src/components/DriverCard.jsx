import React from 'react';
import Rating from './Rating';

import './DriverCard.css';

const DriverCard = ({ name, rating, img, car: { model, licensePlate } }) => {
  return (
    <div className="driverCard">
      <div className="driverPic">
        <img src={img} alt="driver-pic" className="rounded" />
      </div>
      <div className="info">
        <h3>{name}</h3>
        <Rating>{rating}</Rating>
        <span className="car">
          {model} - {licensePlate}
        </span>
      </div>
    </div>
  );
};

export default DriverCard;
