import React from 'react';
import Rating from './Rating';

export default function DriverCard({ name, rating, img, car }) {
  return (
    <div>
      <img src={img} alt="driver" style={{ height: '100px' }} />
      <h2>{name}</h2>
      <Rating>{rating}</Rating>
      <ps>
        {car.model} - {car.licensePlate}
      </ps>
    </div>
  );
}
