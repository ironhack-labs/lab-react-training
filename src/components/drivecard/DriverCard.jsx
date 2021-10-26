import React from 'react';
import './DriverCard.css';
// import BoxColor from '../boxcolor/BoxColor';
import Rating from '../rating/Rating';

function DriverCard(props) {
  return (
    <div>
      <div className="innerContainer">
        <div>
          <img className="driver-picture" src={props.img} alt="" />
        </div>
        <div>
          <h2>{props.name}</h2>
          <h2>
            <Rating>{props.rating}</Rating>
          </h2>

          <p>
            {props.car.model}-{props.car.licensePlate}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DriverCard;
