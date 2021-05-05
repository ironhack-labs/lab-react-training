import React from 'react';
import Rating from '../RatingSection/Rating';
import './DriverCard.css';

export default function DriverCard(props) {
  return (
    <div className="driver-card">
      <div className="driver-img">
        <img src={props.img} alt="driver-pic" />
      </div>
      <div className="driver-details">
        <h4>{props.name}</h4>
        <Rating>{props.rating}</Rating>
        <small>
          {props.car.model} - {props.car.licensePlate}
        </small>
      </div>
    </div>
  );
}
