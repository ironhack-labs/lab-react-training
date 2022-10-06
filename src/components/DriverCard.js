import React from 'react';
import Rating from './Rating';

const DriverCard = (name, rating, img, car) => {
  const { model, licensePlate } = car;

  return (
    <div>
      <div>
        <img src={img} alt="driver" />
      </div>
      <div>
        <span>{name}</span>
        <Rating>{rating}</Rating>
        <span>
          {model} - {licensePlate}
        </span>
      </div>
    </div>
  );
};

export default DriverCard;
