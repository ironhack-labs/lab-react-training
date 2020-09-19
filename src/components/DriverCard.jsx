import React from 'react'
import Rating from './Rating'

const DriverCard = (props) => {
  
  return(
      <div className = "DriverCard">
      <img src={props.img} alt=""/>
        <div>
       <div> {props.name} </div> 
        <div><Rating>{props.rating}</Rating></div>
        <div>{props.car.model} - {props.car.licensePlate}</div>
        </div>

      </div>
  )
}

export default DriverCard