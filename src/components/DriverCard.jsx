import React from 'react'

function DriverCard(props) {
  const { name, rating, img, car } = props;

  return (
    <div>
      <hr />
      <img style={{ width: "15vw", height: "15vh" }} src={img} alt="driver"></img><br />

      <span>{name}</span><br />
      <span>{rating}</span><br />
      <span>{car.model}</span>
      <span>{car.licensePlate}</span>
    </div >
  )
}

export default DriverCard