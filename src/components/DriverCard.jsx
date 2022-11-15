import React from 'react'
import Rating from './Rating';

function DriverCard(props) {

    const {name, rating, img, car} = props;

  return (
    <div className='profile-card-2'>
        <div>
            <img className='small-image' src={img} alt="driver pic" />
        </div>
        <div>
            <h3>{name}</h3>
            <Rating>{rating}</Rating>
            <p>{car.model} - {car.licensePlate}</p>
        </div>
    </div>
  )
}

export default DriverCard