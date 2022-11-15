import React from 'react'
import Rating from './Rating';

function DriverCard(props) {
    const {name, rating, img, car} = props;
  return (
    <div>
        <p>{name}</p>
        <Rating>{rating}</Rating>
        <p>{car.model} {car.licensePlate}</p>
        <img src={img} alt="profile"/>
    </div>
  )
}

export default DriverCard