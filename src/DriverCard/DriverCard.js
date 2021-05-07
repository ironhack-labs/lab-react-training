import React from 'react';

export default function DriverCard(props) {
  const { name, rating, img, car } = props;
  console.log('car');
  return (
    <div>
      <img src={img}></img>
      <h3>{name}</h3>
      <h3>{rating}</h3>
      <div>
        <p>{car.model}</p>
        <p>{car.licensePlate}</p>
      </div>
    </div>
  );
}
