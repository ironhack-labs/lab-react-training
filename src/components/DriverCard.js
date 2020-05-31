import React from 'react';
import './DriverCard.css';

import Rating from './Rating';

function DriverCard(props) {
  return (
    <div className="driverCard">
      <img src={props.img} alt="" />
      <div>
        <h4>{props.name}</h4>
        <Rating>{props.rating}</Rating>
        <p>
          <span>
            {props.car.model} - {props.car.licensePlate}
          </span>
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
