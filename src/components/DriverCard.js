import React from 'react';
import Rating from './Rating';

function DriverCard(props) {
  const { name, rating, img, car } = props;
  const { model, liscensePlate } = car;

  return (
    <div>
      <img src={img} alt="photo" />
      <h4>{name}</h4>

      <Rating>{rating}</Rating>
      <p>
        {model} - {liscensePlate}
      </p>
    </div>
  );
}

export default DriverCard;
