import React from 'react';
import './DriverCard.css';
import Rating from '../rating/Rating';

const DriverCard = (props) => {
  return (
    <div>
      <h1>Driver Card</h1>
      <div id="driver-card">
        <div id="img-container">
          <img src={props.img} alt="Head Shot" />
        </div>
        <div id="user-container">
          <div id="name">{props.name}</div>
          <div id="rating">
            <Rating>{props.rating}</Rating>
          </div>
          <div id="car">
            {props.car.model} - {props.car.licensePlate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
