import React from 'react'

import Rating from './Rating'

import './DriverCard.css'

export default function DriverCard({name,rating,img,car}) {
  return (
    <div className="driverCard">
        <img src={img}/>
        <div className="rightSide">
            <div className="Name">{name}</div>
            <Rating>{rating}</Rating>
            <div>{car.model} - {car.licensePlate}</div>
        </div>
    </div>
  )
}
