import React from 'react'
import Rating from './Rating';

function DriverCard(props) {
    const {name, rating, img, car} = props;
  return (
    <div>
        <h2>{name}</h2>
        <img src={img}/>
        <Rating>{rating}</Rating>
        <p>{car.model} {car.licensePlate}</p>
        
    </div>
  )
}

export default DriverCard