import React from 'react';
import Rating from './Rating';

function DriverCard(props) {
  return (
    <div className="cardDriver">
      <img src={props.img} alt={props.name} />
      <h2>{props.name}</h2>
      <Rating>{props.rating}</Rating>

      <h4>{props.car.model}</h4>
      <h4>{props.car.licensePlate}</h4>
    </div>
  );
}

export default DriverCard;
