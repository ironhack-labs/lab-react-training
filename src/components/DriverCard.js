import React from 'react';
import Rating from './Rating';

export default function DriverCard(props) {
  let ratingDriver = props.rating
  console.log (ratingDriver)
  return (
    <div className="driverCard">
      <img src={props.img} alt="image" />
      <div>
        <h2>{props.name}</h2>
        <Rating ratingNr={ratingDriver}></Rating>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}