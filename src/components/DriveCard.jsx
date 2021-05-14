import React from 'react';
import Rating from './Rating';

function DriveCard(props) {
  const { name, rating, img, car } = props;
  const { model, licensePlate } = car;
  return (
    <div>
      <img src={img} alt={`${name}'s photo`} width="100px" />
      <h4>{name}</h4>
      {/* <Rating>{rating}</Rating> */}
      <Rating children={rating} />
      <p>
        {model} - {licensePlate}
      </p>
    </div>
  );
}

export default DriveCard;
