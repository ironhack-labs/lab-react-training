import React from 'react';
import Rating from './Rating'

function DriverCard(props) {
  return (
    <div className='driver-card'>
      <img alt='The driver' src={props.img} />
      <div>
        <h2>{props.name}</h2>
        <Rating>{props.rating}</Rating>
        <span>
          {props.car.model} - {props.car.licensePlate}
        </span>
      </div>
    </div>
  )
}

export default DriverCard;