import React from 'react';
import Rating from './Rating';

function DriverCard(props) {
  const { name, rating, img, car } = props;
  const { model, licensePlate } = car;
  return (
    <div>
      <img src={img} alt={`${name}'s photo`} />
      <h4>{name}</h4>
      <Rating>{rating}</Rating>
      <p>
        {model} - {licensePlate}
      </p>
    </div>
  );
}

export default DriverCard;
