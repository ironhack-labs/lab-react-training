import React from 'react';
import Rating from './Rating';

const DriverCard = (props) => {
  return (
    <div className="driver-card">
      <img src={props.img} alt="avatar" className="driver-avatar"/>
      <div>
        <h1>{props.name}</h1>
        <Rating>{props.rating}</Rating>
        <p>{props.car.model} - {props.car.licensePlate}</p>
      </div>
    </div>
  );
};

export default DriverCard;
