import React from 'react'

function DriverCard(props) {
  let {name, rating, img, car} = props;
  return (
    <div>
      <p>{name}</p>
      <p>{rating}</p>
      <p>{img}</p>
      <p>{car.model}</p>
      <p>{car.licensePlate}</p>
    </div>
  )
}

export default DriverCard