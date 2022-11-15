import React from 'react'
import Rating from './Rating'

function DriverCard(props) {
  return (

<div className='pilots-cards'>
        <img className="pilot-img" src={props.img} alt="" />
    <div className='License-card'>
        <h2>{props.name}</h2>
        <Rating>{props.rating}</Rating>
        <p>{props.car.model} - {props.car.licensePlate}</p>
    </div>    
 </div>   
  )
}

export default DriverCard