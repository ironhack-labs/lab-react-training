import React from 'react';
import Rating from './Rating';

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="driver-card">
      <img src={img} alt={name} />
      <div className="info">
        <p>{name}</p>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
