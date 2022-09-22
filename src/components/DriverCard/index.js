import React from 'react'
import Rating from '../Rating'
import "./style.css"

const DriverCard = (props) => {
  return (
    <div className='driverCard'>
      <div className='content-img'>
        <img src={props.img} width="100" height="100"/>
      </div>
      <div className='content'>
        <span>{props.name}</span>
        <div className="rating"><Rating>{props.rating}</Rating></div>
        <p>{props.car.model} - {props.car.licensePlate}</p> 
      </div>
    </div>
  )
}

export default DriverCard