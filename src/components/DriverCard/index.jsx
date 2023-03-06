import React from "react";
import Rating from "../Rating"
import "./index.css";

function DriverCard({name, rating, img, car}) {
  return (
    <div className="DriverCard">
        <div className="user-image">
        <img src={img} alt="user"/>
        </div>
        <div className="information">
        <h1>{name}</h1>
        <Rating>{rating}</Rating>
        <h1>{car.model} - {car.licensePlate}</h1>
      </div>  
    </div>
  )
}

export default DriverCard;