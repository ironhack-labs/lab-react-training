import React from 'react';
import Rating from './rating';

export default function DriverCard(props) {
  const profileImg = {
    width: 100,
    height: 100,
  };
  return (
    <div className="card drivercard">
      <div>
        <img style={profileImg} src={props.img} alt="driver" />
      </div>
      <div>{props.name}</div>
      <div>
        <Rating>{props.rating}</Rating>
      </div>
      <div>
        {props.car.model} - {props.car.licensePlate}
      </div>
    </div>
  );
}
