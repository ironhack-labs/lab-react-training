import React from "react";
import Rating from "./Rating";
import "./DriverCard.css";

export default function DriverCard(props) {
    return (
        <div className="mainDiv">
            <div className="photoDiv">
                <img className="photo" src={props.img} alt={props.name} />
            </div>
            <div className="dataDiv">
                <div className="nameDiv">
                    {props.name}
                </div>
                <div className="ratingDiv">
                    <Rating>{props.rating}</Rating>
                </div>
                <div className="carDiv">
                    {props.car.model} - {props.car.licensePlate}
                </div>
            </div>
        </div>
    );
}