import React from 'react';
import './DriverCard.css';

const DriverCard = (props) => {
  let Rrating = '';
  for (let i = 0; i < 5; i++) {
    if (Math.round(props.rating) > i) {
      Rrating += '★';
    } else {
      Rrating += '✩';
    }
  }
  return (
    <div className="driverCardContainer">
      <img src={props.img} alt="avatar"></img>
      <div className="infoDriverCard">
        <h2 className="driverName">
          <b>{props.name}</b>
        </h2>
        <p className="driverStars">{Rrating}</p>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
