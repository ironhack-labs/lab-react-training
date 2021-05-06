import React from 'react';
import './DriverCard.css';
import Rating from './Rating.jsx';

function DriverCard(props) {
  const { name, rating, img, car } = props;
  const { model, licensePlate } = car;
  return (
    <div className="DriverCard">
      <img src={img} alt="Not found" />
      <div className="DriverCard-info">
        <h3>{name}</h3>
        <Rating>{rating}</Rating>
        <p>
          {model} - {licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
