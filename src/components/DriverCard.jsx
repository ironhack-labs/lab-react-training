import React from 'react';
import Rating from './Rating';

function DriverCard(props) {
  return (
    <div className="DriverCard">
      <img src={props.img} alt="driver"></img>
      <div>
        <h2 style={{
            textAlign: 'left'
        }}>{props.name}</h2>
        <Rating>{props.rating}</Rating>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
