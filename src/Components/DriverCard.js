import React from 'react';
import Rating from './Rating';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="driver-card">
      <img
        src={img}
        alt="Profile image"
        className="round__image"
        height="100"
      />
      <div className="card-data">
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <div>
          <span>{car.model}</span> - <span>{car.licensePlate}</span>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
