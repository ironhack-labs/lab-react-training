import React from 'react';
import Rating from '../rating/Rating';

function DriverCard(props) {
  return (
    <div>
        <div>
        {props.name}
        </div>
        <div>
        <Rating>{props.rating}</Rating>
        </div>
        <div>
        <img src={props.img} width="50px"></img>
        </div>
        <div>
        {props.car.model} - {props.car.licensePlate}
        </div>
        
    </div>
  )
}

export default DriverCard;
