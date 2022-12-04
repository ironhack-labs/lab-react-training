import React from 'react'
import "./DriverCard.css"
const DriverCard = (props) => {
    const {name, rating, img, car} = props;
  return (
    <div className="DriverCard">
        <div className="img-driver">
            <img src={img} alt=""/>
        </div>
        <div>
            <h2>{name}</h2>
            <rating children={rating} />
            <p>{car.model} {car.licensePlate}</p>
        </div>
    </div>
  )
}

export default DriverCard