import React from "react";

function DriverCard(props) {
    let rating = Math.round(props.rating);
    let stars = [];

    for (let i = 1; i <= rating ; i++) {
        stars.push("★");
    }

    for (let i = stars.length; i < 5; i++) {
        stars.push("☆");
    }
    return (
        <div className="DriverCard">
            <img src={props.img} alt={props.name}/>
            <div>
                <h2>{props.name}</h2>
                <h2>{stars}</h2>
                <p>{props.car.model} - {props.car.licensePlate}</p>

            </div>
        </div>
    )
}

export default DriverCard;