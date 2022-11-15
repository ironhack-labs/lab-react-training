import React from 'react'
import Rating from './Rating';

function DriverCard(props) {
  return (
    <div className='card'>
    <img className='cardimg' src={props.img} alt="profile pic" />
    <div>
        <h2>{props.name}</h2>
        <Rating>{props.rating}</Rating>
        <p>{props.car.model} - {props.car.licensePlate}</p>
    </div>
    </div>
  )
}

export default DriverCard