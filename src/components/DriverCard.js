import React from "react";
import Rating from "./Rating";
import "./DriverCard.css"

function DriverCard(props) {

    const { name, rating, img, car } = props;

    return (
        <div className="DriverCard">
            <img src={ img } alt={ name } />
            <div>
                <h2>{ name }</h2>
                <Rating stars={ rating } />
                <p>{ car.model } - { car.licensePlate }</p>
            </div>
        </div>
    )
}

export default DriverCard;