import React from 'react'
import Rating from './Rating'


const DriverCard = ({ name, rating, img, car:{ model, licensePlate }, className}) => {
  return (
    <div className="border" style={{backgroundColor: "#455EB5"}}>
      <div className="id-org driver-profile">
        <img src={img} alt='drivers face' className={`driver-id ${className}`}/> 
        <div className="driver-info columns">
          <h3 className="border-plus driver-name">{name}</h3>
          <Rating className="rating">{rating}</Rating>
          <p className="border-plus"> {model} - {licensePlate}</p>
        </div>
      </div>
    </div>
  )
}

export default DriverCard
