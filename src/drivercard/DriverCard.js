import React from 'react';
import './DriverCard.css'

const DriverCard = (props) => {
  const { name, rating, img, car } = props;
  const { model, licensePlate } = car;
  const stars = Math.round(rating);

  let score = '';
  for (let i = 0; i < 5; i++) {
    if (i < stars) {
      score += '★';
    } else {
      score += '☆';
    }
  }

  return (
    <div className="driver-card">
        <div className="driver-img">
            <img src={img} alt=''/>
        </div>
        <div className="driver-info">   
            <h4>{name}</h4>
            <h4>{score}</h4>
            <p>{model} - {licensePlate}</p>
        </div>
    </div>
  )
};

export default DriverCard;
