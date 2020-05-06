import React from 'react'
import Rating from '../Rating'

const DriverCard = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <Rating rate={props.rating} />
      <img src={props.img} alt="" />
      <p>{props.car.model}</p>
      <p>{props.car.licensePlate}</p>
    </div>
  )
}
export default DriverCard
