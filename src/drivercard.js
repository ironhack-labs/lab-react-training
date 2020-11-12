import React from 'react';
import Rating from './rating';

const DriverCard = (props) => {
  return (
    <div className="profile">
      <img src={props.img} alt="" />
      <div className="profile">
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