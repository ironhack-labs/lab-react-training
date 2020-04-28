import React from "react";
import Rating from "./Rating";
import "../index.css";

const DriveCard = props => {
    const { name, rating, img, car } = props;

    return (
        <div className="drive-card-container">
            <img className="drive-card-img" src={img} alt="" />
            <div className="drive-card-sub">
                <h3>{name}</h3>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriveCard;