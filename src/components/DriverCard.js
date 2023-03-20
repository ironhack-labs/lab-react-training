import React from 'react'
import Rating from './Rating';


function DriverCard({name, rating, img, car}) {
  return (
    <div className='driverCard'>
        <img className='driver-img' src={img} alt={name} />

      <div className='driverInfo'>
        <p>{name}</p>
        <div className='ratingDriver'><Rating>{rating}</Rating></div>
        <div className='cardModel'> model: {car.model} {car.licencePlate}</div>

      </div>
    </div>
  )
}

export default DriverCard