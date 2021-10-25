import React from 'react';
import Rating from './Rating';

function DriverCard(props) {
  return (
    <div>
      <p>{props.name}</p>
      <Rating>{props.rating}</Rating>
      <img style={{ width: '35% ' }} src={props.img} alt="" />
      <p>{props.car.model}</p>
      <p>{props.car.licensePlate}</p>
    </div>
  );
}

export default DriverCard;
