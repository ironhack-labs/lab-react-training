import React from 'react'
import Rating from './Rating';

function DriverCard(props) {
    const { name, rating, img, car } = props;
  return (
    <div>
      <h2>{name}</h2>
      <Rating>{rating}</Rating>
      <img src= {img} alt="" />
      <p> {car.model} - {car.licensePlate} </p>
    </div>
  )
}

export default DriverCard;