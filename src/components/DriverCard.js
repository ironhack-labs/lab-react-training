import React from 'react';
import Rating from './Rating';

function DriverCard(props) {
  const {
    name,
    rating,
    img,
    car
  } = props;


  return (
    <div className="driver-card">
      <img src={img} alt={`Profile of ${name}`} />
      <div className="info">
        <h1>{name}</h1>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;