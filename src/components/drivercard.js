import React from 'react';

export default function DriverCard(props) {
  let stars = Math.round(props.rating);
  let displayStars;

  switch (stars) {
    case 0:
      displayStars = `☆☆☆☆☆`;
      break;
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
  }
  return (
    <div className="driverCard">
      <img src={props.img} alt={props.name} />
      <div>
        <h2>{props.name}</h2>
        <p>{displayStars}</p>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}
