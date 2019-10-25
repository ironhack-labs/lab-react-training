import React from 'react';
import Rating from '../Rating/Rating';
import './DriverCard.css';

const DriverCard = ({ img, name, rating, car }) => {
  return (
    <div className="driverCard">
      <div><img src={img} alt={name} /></div>
      <div>
        <div><h2>{name}</h2></div>
        <Rating
          rating={rating}
        />
        <div>{car.model} - {car.licensePlate}</div>
      </div>
    </div>
  );
};

export default DriverCard;
