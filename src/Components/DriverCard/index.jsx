import React from "react";
import Rating from "../Rating";
const DriverCard = ({name, rating,img,car})=>{

    return(
        <div>
        <p>{name}</p>
        <Rating> {rating} </Rating>
        <img src={img} alt=""></img>
        <p>{car.model} - {car.licensePlate}</p>
        </div>
    )
}

export default DriverCard;

