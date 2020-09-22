import React from 'react';
import './DriverCard.css';

function DriverCard(props) {
  const rate = Math.round(props.rating);

  let stars = '';
  for (let i = 0; i < 5; i++) {
    if (i < rate) {
      stars += '★';
    } else {
      stars += '☆';
    }
  }

  return (
    <div className="DriverCard">
      <img src={props.img} alt="avatar"></img>
      <div className="infoDiv">
        <h5>{props.name}</h5>
        <p>{stars}</p>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
