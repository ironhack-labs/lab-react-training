import React from 'react'
import Rating from './Rating'

const DriverCard = ({name, rating, img, car}) => {
  const { model, licensePlate } = car
  return (
    <div className='driver-card'>
      <div className='driver-card-content'>
        <img src={img} alt={name}/>
        <div className='card-info'>
          <strong>{name}</strong>
          <Rating>{rating}</Rating>
          {model} - {licensePlate}
        </div>
      </div>
    </div>
  )
}

export default DriverCard