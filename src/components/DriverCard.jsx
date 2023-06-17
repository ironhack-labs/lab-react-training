import React from 'react';
import Rating from './Rating';

function DriverCard(props) {
  return (
    <div className="driverCard">
      <img className="driverCardPhoto" src={props.img}></img>
      <div className="driverInfo">
        <div>{props.name}</div>
        <Rating>{props.rating}</Rating>

        <div>
          <span>{props.car.model}-</span>
          <span>{props.car.licensePlate}</span>
        </div>
      </div>
    </div>
  );
}

export default DriverCard;
