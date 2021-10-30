import React from 'react';
import Rating from './Rating';

function DriverCard(props) {
  return (
    <div>
      <div>
        <div>
          <img src={props.img} alt="" />
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
