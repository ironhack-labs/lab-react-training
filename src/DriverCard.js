import React from "react";
import Rating from "./Rating"

function DriverCard({name, rating, img, car}){
    return(
        <div className="driverCard-container">
            <img src={img} width="150px" height="165px" alt=""></img>
            <div className="">
                <p><strong>{name}</strong></p>
                <Rating>{rating}</Rating>
                <p> {car.model} {car.licensePlate}</p>
            </div>
        </div>
    )
}
export default DriverCard;