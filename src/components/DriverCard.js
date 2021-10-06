import React from 'react'
import Rating from './Rating';

function DriverCard(props) {
  const { name, rating, img, car } = props.driver;

  return (
    <div>
      <div>
        <img style={{ width: "150px" }} src={img} alt="" />
      </div>
      <div>
        <p>{name}</p>
        <Rating>{rating}</Rating>
      </div>
      <p><span>{car.model}</span> - <span>{car.licensePlate}</span></p>
    </div>
  )
}

export default DriverCard
