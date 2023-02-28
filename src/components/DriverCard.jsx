import React from 'react'

function DriverCard(props) {
  return (
    <div>
    <p> {props.name} </p>
    <p>{props.rating}</p>
    <img class ="image3" src={props.img} alt = ""/>
    <p>{props.car.model}</p>
    <p>{props.car.licensePlate}</p>
   </div>
  )
}

export default DriverCard