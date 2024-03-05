import React from 'react';
import Rating from './Rating';

export const DriverCard = ({ name, rating, img, car }) => {
  return (
    <>
      <div className="driver-card">
        <img src={img} />
        <div className="driver-info">
          <h2>{name}</h2>
          <p>{Rating} </p>
          <p>
            {car.model} - {car.licensePlate}
          </p>
        </div>
      </div>
    </>
  );
};
