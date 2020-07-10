import React from 'react';
import Rating from './Rating';
import './DriverCard.css';

const DriverCard = (props) => {
  return (
    <div className="driver-card">
      <div className="driver-img">
        <img src={props.img} alt="driver-img" />
      </div>
      <div className="driver-data">
        <h2>{props.name}</h2>
        <Rating className="rating-stars">{props.rating}</Rating>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
