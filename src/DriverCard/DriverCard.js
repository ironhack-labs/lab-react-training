import React from "react";
import Rating from "../rating/Rating"
import '../DriverCard/DriverCard.css'

function DriverCard({name, rating, img, car}){
    return(
        <div className= 'container-drivercard'>
            <img className = 'img-picture' src={img} alt=""></img>
            <div>
                <p id = 'name'>{name}</p>
                <Rating>{rating}</Rating>
                <p> {car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
}
export default DriverCard; 