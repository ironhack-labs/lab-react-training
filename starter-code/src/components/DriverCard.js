import React from 'react';

import Rating from './Rating.js';

import './DriverCard.css'; 

const DriverCard = (props) => {
  return (
    <div className="driver-card-container">
      <img src={props.img} alt="driver face" />
      <div>
        <h3>{props.name}</h3>
        <Rating>{props.rating}</Rating>
        <p>{props.car.model} - {props.car.licensePlate}</p> 
      </div>
    </div>
  )
}

export default DriverCard;