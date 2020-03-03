import React from 'react';

import './style.scss';
import Rating from './../Rating/index';

const DriverCard = props => {
  return (
    <div className="driverCard">
      <img src={props.img} alt={props.name} />
      <div>
        <h2>
          <strong>{props.name}</strong>
        </h2>
        <Rating>{props.rating}</Rating>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
