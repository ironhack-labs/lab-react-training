import React from 'react';

function DriverCard(props) {
  let rate = Math.ceil(Number(props.rating));
  let stars;
  if (rate === 0) {
    stars = '☆☆☆☆☆';
  } else if (rate === 1) {
    stars = '★☆☆☆☆';
  } else if (rate === 2) {
    stars = '★★☆☆☆';
  } else if (rate === 3) {
    stars = '★★★☆☆';
  } else if (rate === 4) {
    stars = '★★★★☆';
  } else {
    stars = '★★★★★';
  }

  return (
    <div className="driver-card">
      <img src={props.img} alt="driver-img" />
      <div className="about-driver">
        <h1>{props.name}</h1>
        <p>{stars}</p>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
