import React from 'react';
import Rating from './Rating';

const DriverCard = (props) => {
  return (
    <div>
      <img src={props.img} alt="" />
      <div>
        <p>{props.name}</p>
        <Rating>{props.rating}</Rating>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;