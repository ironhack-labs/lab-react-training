import React from 'react';
import Rating from './Rating';

export default function DriverCard(props) {
  return (
    <>
      <div className="driver-card">
        <div>
          <img src={props.img}></img>
        </div>
        <div>
          <p>{props.name}</p>
          <Rating>{props.rating}</Rating>
          <p>
            {props.car.model} - {props.car.licensePlate}
          </p>
        </div>
      </div>
    </>
  );
}
