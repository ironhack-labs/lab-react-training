import React from "react";
import "./DriverCard.css";
import Rating from "../rating/Rating";

const DriverCard = ( {name, rating, img, car} ) => {
    return (
        <div className="driver-card">
            <img src={img} alt={`${name} card`} />
            <div>
                <h2>{name}</h2>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    );
};

export default DriverCard;