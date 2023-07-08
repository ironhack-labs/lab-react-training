import React from 'react'
import Rating from './Rating'

export default function DriverCard( {name, rating, img, car} ) {


  return (
    <div className="driverCard-container">

       <div>
       <img className="driverPic" alt="driverPicture" src={img}/>
       </div>
       <div className="driverInfo">
       <h2>{name}</h2>
        <Rating>{rating}</Rating>
       <span className="driverCar">
       <p>{car.model} - </p>
        <p>{car.licensePlate}</p>
        </span>

    </div>
    </div>
  )
}
