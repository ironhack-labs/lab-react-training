import React from 'react';
import Rating from './Rating';

export default function DriverCard(props) {
  console.log(props);
  return (
    <div className="Driver-card-div">
      <div>
        <img id="driverCardImg" src={props.img} alt="" />
      </div>
      <div id="driverCardInfo">
        <h2>{props.name}</h2>
        <Rating>{props.rating}</Rating>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}
