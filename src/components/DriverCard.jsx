import React from 'react';
import Rating from './Rating';

function DriverCard(props) {
  console.log(props);
  return (
    <div>
      <p>{props.name}</p>
      <Rating>{props.rating}</Rating>
    </div>
  );
}

export default DriverCard;
