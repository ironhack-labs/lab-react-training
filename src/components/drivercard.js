import React from 'react';
import Rating from './rating';

export default function DriverCard(props) {
  return (
    <div className="driverCard">
      <img src={props.img} alt={props.name} />
      <div>
        <h2>{props.name}</h2>
        <Rating>{props.rating}</Rating>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}
