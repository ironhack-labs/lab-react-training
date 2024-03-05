import React from 'react';
import Rating from './Rating';

function DriverCard(props) {
  return (
    <div className="DriverCard">
      <img src={props.img} alt="driver"></img>
      <div className="driver-info">
        <h2>{props.name}</h2>
        <div
          style={{
            backgroundColor: 'black',
          }}
        >
          <Rating>{props.rating}</Rating>
        </div>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;