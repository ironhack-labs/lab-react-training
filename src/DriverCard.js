import React from 'react';
import Rating from './Rating';

const DriverCard = (props) => {
  return (
    <div className="DriverCardContainer">
      <img className="DriverCard-Img" src={props.img} alt={props.name}></img>
      <div className="DriverCard">
        <h3>{props.name}</h3>
        <Rating>{props.rating}</Rating>
        <h4>
          {props.car.model} - {props.car.licensePlate}
        </h4>
      </div>
    </div>
  );
};

export default DriverCard;
