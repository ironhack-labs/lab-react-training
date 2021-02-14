import React from 'react';
import { Rating } from '../Rating/Rating';

export function DriverCard({name, rating, img, car}) {
  return (
    <div className='driver-container'>
      <img src={img} alt="Driver card picture"  />
      <div className="driver-info">
        <p><strong>{name}</strong></p>
        <Rating>{rating}</Rating>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  )
}