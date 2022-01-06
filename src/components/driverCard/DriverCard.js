import React from "react";
import './DriverCard.css';
import Rating from "../Rating/Rating";

const DriverCard = (props) => {
  const {
    name, 
    rating, 
    img, 
    car
  } = props;

  return(
    <div className="driverCar-wrapper">
      <img src={img} alt={name} />
      <div>
        <p>{name}</p>
        <Rating>{rating}</Rating>
        <p>{car.model} - {car.licensePlate}</p>
      </div>
    </div>
  )
}

export default DriverCard;