import React from 'react'

function DriverCard(props) {
    const {name, rating, img, car} = props
    console.log(props)
  return (
    <div>
        <p>{name}</p>
        <p>{rating}</p>
        <img src={img} alt="" />
        <p>{car.model} - {car.licensePlate}</p>
    </div>
  )
}

export default DriverCard