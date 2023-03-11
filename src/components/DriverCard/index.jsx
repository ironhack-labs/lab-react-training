import React from 'react';
import Rating from '../Rating';
import './index.css'

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className='DriverCard'>
      <img src={img} />
      <div>
        <h4>{name}</h4>
        <Rating>{rating}</Rating>
        <span>{car.model}</span>
        <span>{car.licensePlate}</span>
      </div>
    </div>
  );
};

export default DriverCard;