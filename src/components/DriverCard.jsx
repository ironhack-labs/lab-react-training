import React from 'react';
import Rating from './Rating';

function DriverCard(props) {
  const { name, rating, img, car } = props;
  const { model, licensePlate } = car;
  return (
    <div>
      <img style={{ width: '200px' }} src={img} alt={`${name}'s photo`} />
      <h5>{name}</h5>
      <Rating>{rating}</Rating>
      <p>
        {model} - {licensePlate}
      </p>
    </div>
  );
}

export default DriverCard;
