import React from 'react';
import './DriverCard.css';

const DriverCard = (props) => {
  let resRating = '';
  for (let i = 0; i < 5; i++) {
    if (i < Math.round(props.rating)) resRating += '★';
    else resRating += '☆';
  }

  return (
    <div className="driver-card">
      <div className="driver-img-div">
        <img src={props.img} />
      </div>
      <div className="driver-info-div">
        <p> {props.name} </p>
        <p> {resRating} </p>
        <div>
          <p>
            {props.car.model} <span> {props.car.licensePlate} </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
