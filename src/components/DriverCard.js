import React from 'react';

export default function DriverCard(props) {
  const { name, rating, img, car } = props;
  const star = {
    0: '☆☆☆☆☆',
    1: '★☆☆☆☆',
    2: '★★☆☆☆',
    3: '★★★☆☆',
    4: '★★★★☆',
    5: '★★★★★',
  };
  return (
    <div>
      <p>
        <img src={img} alt={name}></img> <br></br>
        {name} <br></br>
        {star[Math.round({ rating })]} <br></br>
        {car.model} {car.licensePlate} <br></br>
      </p>
    </div>
  );
}
