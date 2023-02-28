import React from 'react'
import './DriverCard.css';
import Rating from './Rating';

function DriverCard(props) {
    const {name, rating, img, car} = props;
  return (
    <div className='driver-card'>
        <img src={img} alt="" className='driver-img'/>
        <div>
            <h2>{name}</h2>
            <Rating>{rating}</Rating>
            <h4>{car.model} - {car.licensePlate}</h4>
        </div>
    </div>
  )
}

export default DriverCard