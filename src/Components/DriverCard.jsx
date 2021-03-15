import React from 'react';
import Rating from "./Rating";
import "./../styles/DriverCard.css";

const DriverCard = (props) => {
  return (
    <div className="DriverCard__box">
      <img src={props.img} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p className="DriverCard__rating">
          <Rating>{props.rating}</Rating>
        </p>
        <p className="DriverCard__car-info">{props.car.model} - {props.car.licensePlate}</p>
      </div>
    </div>
  )
}

export default DriverCard
