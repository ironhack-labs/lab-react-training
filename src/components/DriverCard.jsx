import React from 'react';
import Rating from './Rating';

const DriverCard = (props) => {
  return (
    <div className="DriverCard">
    <img className="left" src={props.img} alt=""/>
    <div className="right">
        <h2>{props.name}</h2>
        <div className="Rating"><Rating>{props.rating}</Rating></div>
      <p>{props.car.model} — {props.car.licensePlate}</p>
    </div>
    </div>

  );
};

export default DriverCard;
