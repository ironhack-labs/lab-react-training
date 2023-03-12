import React from 'react';
import Rating from '../Rating';
import './DriverCard.css';

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="DriverCard">
      <div>
        <img src={img} alt="foto" className="foto" />
      </div>
      <div className="driver-info">
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
