import React from 'react';

import './DriverCard.css';

import Rating from '../Rating/Rating';

const DriverCard = ({ name, rating, img, car }) => {

  const roundedImg = {
    display: 'block',
    width: '200px',
    height: '200px',
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    borderRadius: '50%',
    marginLeft: '30%',
    marginTop: '25px',
    marginBottom: '25px',
  }

  return (
    <div className="drivercard-container">
      <div style={roundedImg} className="drivercard-picture"></div>

      <div>
        <h1><strong>{name}</strong></h1>
        <Rating>{rating}</Rating>
        <h3>{car.model} - {car.licensePlate}</h3>
      </div>
    </div>
  );
};

export default DriverCard;
