import React from 'react';
import './DriverCard.css';

const DriverCard = (props) => {
  const { name, rating, img, car } = props;

  return (
    <div className="driver-card">
      <img className="driver-image" src={img} alt={name} />
      <div className="driver-info">
        <h2>{name}</h2>
        <p className="driver-rating">{rating.toFixed(1)} Stars</p>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  );
};

export default DriverCard;
