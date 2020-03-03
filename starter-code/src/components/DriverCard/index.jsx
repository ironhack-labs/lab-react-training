import React from 'react';
import Rating from './../Rating';
import './style.scss';

const DriverCard = props => {
  return (
    <div className="driver-card">
      <img src={props.img} alt={props.name} />
      <div>
        <strong>{props.name}</strong>
        <Rating>{props.rating}</Rating>
        <br />
        <span>
          {props.car.model} - {props.car.licensePlate}
        </span>
      </div>
    </div>
  );
};

export default DriverCard;
