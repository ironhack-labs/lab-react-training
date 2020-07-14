import React from 'react';
import Rating from './Rating';

function DriverCard(props) {
  return (
    <div className="driver-card">
      <div className="driver-card-container">
        <div>
          <img className="driver-card-img" src={props.img} alt="Profile pic" />
        </div>
        <div>
          <ul>
            <li>
              {' '}
              <h2>{props.name}</h2>{' '}
            </li>
            <li>
              <Rating>{props.rating}</Rating>
            </li>
            <li>
              {props.car.model} - {props.car.licensePlate}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DriverCard;
