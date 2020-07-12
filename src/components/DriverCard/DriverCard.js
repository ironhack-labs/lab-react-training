import React from 'react'
import "./DriverCard.css"

function DriverCard(props) {
    return (
        <div className="driverCard">
        <div>
        <img className="photo" src={props.img} alt=""></img>
        </div>
        <div>
        <h3><b>{props.name}</b></h3>
        <p>{props.rating}</p>
        <p>{props.car.model} - {props.car.licensePlate}</p>
        </div>
            
        </div>
    )
}

export default DriverCard
