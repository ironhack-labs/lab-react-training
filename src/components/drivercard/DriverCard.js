import React from 'react';
import Rating from '../rating/Rating';

function DriverCard(props) {
  const { name, rating, img, car } = props;
  return (
    <div>
      <img src={img} height="100px" />
      <p>{name}</p>
      <p>
        {' '}
        <Rating>{rating}</Rating>
      </p>
      <p>
        {car.model} - {car.licensePlate}
      </p>
    </div>
  );
}

export default DriverCard;
