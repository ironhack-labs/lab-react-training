import React from 'react'

import Rating from './Rating';

function DriverCard(props) {
  
    const { name, rating, img, car } = props;
  
    return (
    <div className='driver-card'>
        <div>
            <img className='driver-img' src={img}></img>
        </div>
        <div>
            <h1>{name}</h1>
            <Rating children={rating}/>
            <p>{car.model} - {car.licensePlate}</p>
        </div>
    </div>
  )
}

export default DriverCard