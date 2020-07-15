import React from 'react';
import Rating from './rating/Rating';

const DriverCard = (props) => {
  return (
    <div className="card">
      <div className="col">
        <div
          className="profilePicture"
          style={{ backgroundImage: `url(${props.profilePicture})` }}
        ></div>
      </div>
      <div className="col">
        <ul>
          <li className="name">{props.name}</li>
          <li>
            <Rating>{props.rating}</Rating>
          </li>
          <li>
            {props.car.model} - {props.car.licensePlate}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DriverCard;
