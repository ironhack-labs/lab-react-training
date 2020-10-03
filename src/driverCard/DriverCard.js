import React from 'react';
import Rating from '../rating/Rating';

export default function DriverCard(props) {
  const divStyle = {
    height: 100,
    width: 100,
  };
  return (
    <div>
      <div>
        <img style={divStyle} src={props.img} />
      </div>
      <div>{props.name}</div>
      <div>
        <Rating>{props.rating}</Rating>
      </div>
      <div>
        {props.car.model} - {props.car.licensePlate}
      </div>
    </div>
  );
}
