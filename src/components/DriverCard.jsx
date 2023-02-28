import React from 'react'
import Rating from './Rating'

function DriverCard(props) {
    const {name, rating, img, car} = props
  return (
    <div>
<p>{name}</p>
<Rating>{rating}</Rating>
<img src= {img} />
<p>{car.model} - {car.licensePlate}</p>
    </div>
  )
}

export default DriverCard