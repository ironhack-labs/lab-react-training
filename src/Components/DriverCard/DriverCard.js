import React from 'react';
import Rating from '../Rating/Rating';
import './DriverCard.css';

const DriverCard = (props) => {
  return (
    <div className="driverContainer">
      <img src={props.img} alt="" />
      <div className="driverContainer2">
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
