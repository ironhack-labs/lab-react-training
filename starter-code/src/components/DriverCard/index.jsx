import React from 'react';
import Rating from './../Rating';
import './style.css';

const DriverCard = props => {
  return (
    <div className="driver-card">
      <img className="img-drivercard" src={props.img} alt={props.name} />
      <div className="info">
        <p>
          <strong>{props.name}</strong>
        </p>
        <Rating>{props.rating}</Rating>
        <span>
          {props.car.model} - {props.car.licensePlate}
        </span>
      </div>
    </div>
  );
};

export default DriverCard;
