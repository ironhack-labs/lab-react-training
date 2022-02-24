
import React from 'react'

export default function DriverCard(props) {

    
  return (
    <>
        <div >
        <p>{props.name}</p>
        <p>{props.rating}</p>
        {/* <img src={props.img} alt="image" /> */}
        <p>{props.car.model}</p>
        <p>{props.car.licensePlate}</p>
        </div>
        
    </>
  )
}
