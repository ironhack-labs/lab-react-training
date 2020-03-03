import React from 'react';

import './style.scss';

import Rating from './../Rating';

const DriverCard = props => {
  return (
    <div className="driver-card">
      <img src={props.img} alt={props.name} />
      <div>
        <strong>{props.name}</strong>
        <br />
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
