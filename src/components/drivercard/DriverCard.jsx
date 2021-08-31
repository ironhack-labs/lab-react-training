import React from 'react';
import './DriverCard.css'
import Rating from '../rating/Rating';

const DriverCard = ({ name, rating, img, car }) => {

  return( 
    <div className='DriverCard'>
      <img src={img} alt={name}></img>
      <div>
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <div>
          <p>{car.model} - {car.licensePlate}</p>
        </div>
      </div>
    </div>
  )
}

export default DriverCard