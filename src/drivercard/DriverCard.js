import React from 'react';
import './DriverCard.css';
function DriverCard(props) {
  return (
    <div className="drivercard">
      <p>{props.name} </p>

      <p>{props.rating} </p>

      <img className="img" src={props.img} alt="Avatar" />

      <p>
        {props.car.model} - {props.car.licensePlate}
      </p>
    </div>
  );
}

export default DriverCard;
