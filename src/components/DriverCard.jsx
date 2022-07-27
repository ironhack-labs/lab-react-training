import React from 'react';
import Rating from './Rating';

function DriverCard(props) {

    const{name, rating, img, car} = props

  return (
    <div className='driver'>
        <img src={img} alt="driver" />
        <div>
            <h2>{name}</h2>
            <h2><Rating>{rating}</Rating></h2>
            <p>{car.model} - {car.licensePlate}</p>
        </div>
    </div>
  )
}

export default DriverCard;