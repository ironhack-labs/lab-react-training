import React from "react";
import Rating from "./Rating"

function DriverCard({name, rating, img, car:{model, licensePlate}}) {
    return (
        <div className="drivercard-container">
            <div className="drivercard-image-container">
                <img src={img} alt="Driver card"></img>
            </div>
            <div className="drivercard-details">
                <h5>{name}</h5>
                <Rating> {rating} </Rating>
                <p> {model} - {licensePlate}
            </div>
        </div>
    )
}