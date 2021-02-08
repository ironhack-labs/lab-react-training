import React from 'react';
import Rating from '../Rating/Rating'

function DriverCard({name, rating, img, car}){

  return (
    <article>
      <div className='driverCard'>
        <div>
          <img className='driverImg' src={img}></img>
        </div>
        <div className='container-column'>
          <p className="driver-name">{name}</p>
          <Rating>{rating}</Rating>
          <p>{car.model} - {car.licensePlate}</p>
        </div>
      </div>
    </article>
  )
}

export default DriverCard