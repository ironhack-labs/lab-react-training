import React from 'react';
import Rating from '../components/Rating';

function DriverCard(props) {
  return (
    <div className="driverCard">
      <img src={props.img} />
      <div className="info">
        <h2>{props.name}</h2>
        <Rating>{props.rating}</Rating>
        <span>
          {props.car.model} - {props.car.licensePlate}
        </span>
      </div>
    </div>
  );
}

export default DriverCard;
