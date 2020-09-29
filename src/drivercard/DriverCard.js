import React from 'react';
import './DriverCard.css';

const DriverCard = (props) => {
  let rate = props.children;

  const divStyle = {
    backgroundImage: `url(${props.image})`,
  };

  return (
    <div className="driver-card">
      <div style={divStyle} className="driver-image"></div>
      <div className="driver-details">
        <h2>{props.name}</h2>
        <div className="rating">
          {rate <= 0.5 ? '☆' : '★'}
          {rate <= 1.5 ? '☆' : '★'}
          {rate <= 2.5 ? '☆' : '★'}
          {rate <= 3.5 ? '☆' : '★'}
          {rate <= 4.5 ? '☆' : '★'}
        </div>
        <p>
          {props.car.model} {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
};
export default DriverCard;
