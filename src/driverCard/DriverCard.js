import React from 'react';

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
        <p>{props.name}</p>
        <p>{rating(props.stars)}</p>
        <p>
          {props.car.model} - {props.car.license}
        </p>
      </div>
    </div>
  );
}
