import React from 'react'
import Rating from "./Rating";

const DriverCard = props => {
    const { name, rating, img, car } = props
    return (
      <div className="driverCard">
        <div >
          <img className="img-driver" src={img} />
        </div>
        <div>
          <h2>{name}</h2>
          <Rating children={rating} />
          <h2>{car.model} {car.licensePlate}</h2>
        </div>
      </div>
    )
  }
  export default DriverCard;