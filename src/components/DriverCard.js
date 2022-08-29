import React from 'react';

import Rating from './Rating';

function DriverCard(props) {
  return (
    <div className="driver-card">
      <img src={props.img} alt="The driver" />
      <div>
        <h2>{props.name}</h2>
        <Rating>{props.rating}</Rating>
        <span>
          {props.car.model} - {props.car.licensePlate}
        </span>
      </div>
    </div>
  );
}

export default DriverCard;