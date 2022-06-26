import React from 'react';
import Rating from './Rating';

import './DriverCard.css';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="driver-card">
      <div className='driver-car-pic-container'>
        <picture>
          <img src={img} alt="" />
        </picture>
      </div>
      <div className='driver-car-info-container'>
        <div>{name}</div>
        <div>
          <Rating>{rating}</Rating>
        </div>
        <div>
          {car.model} - {car.licensePlate}
        </div>
      </div>
    </div>
  );
};

export default DriverCard;

// name: A string
// rating: A number between 0 and 5. The value can be a floating point number.
// img: A string
// car: An object with properties model and licensePlate.
