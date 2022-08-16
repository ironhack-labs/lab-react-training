import React from 'react'

function DriverCard(props) {
    const {name, rating, img, car} = props;
  return (
    <div>
            <h1>{name}</h1>
            <h2>{rating}</h2>
            <img src={img} alt="driver" width="80px"/>
            <h3>{car.model} - {car.licensePlate}</h3>
    </div>
  )
}

export default DriverCard