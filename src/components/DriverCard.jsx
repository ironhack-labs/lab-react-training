import React from 'react';
import "./../styles/DriverCard.css"

const DriverCard = (props) => {
  let stars = [1, 2, 3, 4, 5];
  return (
    <div className="driver-card">
    <img src={props.img} alt="driver"/>
    <div className="driver-info">
      <h2>{props.name}</h2>
      <h2>
        {stars.map((star) => {
          return star <= Math.round(props.rating) ? '★' : '☆';
        })}
      </h2>
      <h3>{props.car.model} - {props.car.licensePlate}</h3>
      </div>
    </div>
  );
};

export default DriverCard;
