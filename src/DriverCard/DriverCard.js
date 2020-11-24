import React from 'react';
import './DriverCard.css'

export default function DriverCard(props) {
  let stars = Math.round(props.rating);
  let displayStars;

  switch (stars) {
    case 1:
      displayStars = `★☆☆☆☆`;
      break;
    case 2:
      displayStars = `★★☆☆☆`;
      break;
    case 3:
      displayStars = `★★★☆☆`;
      break;
    case 4:
      displayStars = `★★★★☆`;
      break;
    case 5:
      displayStars = `★★★★★`;
      break;
    default :
    displayStars = `☆☆☆☆☆`;
    break;
  }

  return (
    <div className="driverCard">
      <img src={props.img} alt={props.name} />
      <div className ="profile">
        <h3>{props.name}</h3>
        <h3>{displayStars}</h3>
        <h5>
          {props.car.model} - {props.car.licensePlate}
        </h5>
      </div>
    </div>
  );
}