import React from 'react'
import Rating from './Rating';
import './DriverCard.css'

function DriverCard({name, rating, img, car}) {


  return (
    <div className="driverCard">
      <img src={img} alt="img-license" />
      <div className="info">
        <p>{name}</p>
        <p>
          <Rating>{rating}</Rating>
        </p>
        <span>{car.model}</span> - <span>{car.licensePlate}</span>
      </div>
    </div>
  );
}

export default DriverCard

