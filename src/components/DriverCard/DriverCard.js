import React from 'react'
import Rating from '../Rating/Rating'
import './DriverCard.css'

const DriverCard = ({name, rating, img, car}) => {
  return (
    <div className='driverCard d-flex justify-content-center align-items-center p-3 mb-3'>
      <div className="diverCard-block d-flex justify-content-center">
        <img src={img} alt=''></img>
        <div className="mt-3 mb-3">
          <p className="title">{name}</p>
          <Rating>{rating}</Rating>
          <p>{car.model} {car.licensePlate}</p>
        </div>
      </div>
    </div>
  )
}

export default DriverCard
