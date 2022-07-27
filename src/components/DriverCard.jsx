import React from 'react'
import './DriverCard.css'
const DriverCard = ({name, rating, img, car}) => {
  return (
    <div className='driver'>
        <div className="image">
            <img src={img} alt={name} />
        </div>
        <div className="data">
            <h2>{name}</h2>
            <h5>{rating}</h5>
            <p>{car.model}-{car.licensePlate}</p>
        </div>
        
    </div>
  )
}

export default DriverCard