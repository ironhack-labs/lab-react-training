import React from 'react'
import Rating from '../Rating'

const DriverCard = ({name, rating, img, car}) => {
  return (
    <div className='Driver'>
        <p><strong>{name}</strong></p>
        <img src={img}/>
        <p>{car.model}-{car.licensePlate}</p>
        <Rating>{rating}</Rating>
    </div>
  )
}

export default DriverCard