import React from "react";
import "./DriveCard.css";
import Rating from "../rating/Rating";

const DriveCard = (props) =>{
return (
    <div className="DriveCard">
    <div className="Profile">
        <img className="imgDriver" src={props.img} alt =""/>
        </div>
        <div className="ProfileInfo">
        <h1><b>{props.name}</b></h1>
        <Rating className="rateDriver">{props.rating}</Rating>
        <p>{props.car.model} - {props.car.licensePlate}</p>
        </div>
    </div>
)
}
export default DriveCard;