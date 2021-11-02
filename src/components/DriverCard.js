import React from 'react';
import Rating from './Rating';

function DriverCard(props) {
    return (
      <div className="driver-card-container">
        <div className="driver-card-image">
          <img src={props.img} alt="driver" />
        </div>
        <div className="driver-card-details">
          <h4>{props.name}</h4>
          <Rating>{props.rating}</Rating>
          <p>
            {props.car.model} - {props.car.licensePlate}
          </p>
        </div>
      </div>
    );
}

export default DriverCard;