import React from 'react'
import Rating from '../Rating'

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div>
      <img src={img} alt="" style={{ width: '100px' }} />

      <div>
        <h3>{name}</h3>
        <Rating rate={rating} />
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  )
}

export default DriverCard
