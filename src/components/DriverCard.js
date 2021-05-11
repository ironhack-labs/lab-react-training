import React from 'react';
import Rating from './Rating';
import '../App.css';

function DriverCard(props) {
  return (
    <div className="driver-card">
      <img src={props.img} alt="Driver's photo"></img>
      <div>
        <h4>{props.name}</h4>
        <Rating children={props.rating} />
        <p>
          {props.car.model} – {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
