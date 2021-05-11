import React from 'react';
// import Rating from '../rating/Rating';
import './DriverCard.css';

export default function DriverCard(props) {
  const rating = (stars) => {
    let result = '';
    for (let i = 1; i <= 5; i++) {
      if (i >= 1 && i <= Math.round(stars)) {
        result += '★';
      } else result += '☆';
    }
    return result;
  };

  return (
    <div className="drivercard">
      <img src={props.img} alt="driver" />
      <div className="drivercardtext">
        <h2>{props.name}</h2>
        <p>{rating(props.stars)}</p>
        {/* <Rating></Rating> */}
        <p>
          {props.car.model} - {props.car.license}
        </p>
      </div>
    </div>
  );
}
