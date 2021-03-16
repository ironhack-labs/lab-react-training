import React from 'react'
import "../styles/DriverCard.css"


function DriverCard(props) {

    let ratings="";
    for (let i = 0; i < 5; i++ ) {
        i < props.rating.toFixed() ? ratings += "★" : ratings += "☆";
    }

    return (
        <div className="DriverCard">
            <img src={props.img} alt="driver portrait"/>
            <div className="DriverInfo">
                <h2>{props.name}</h2>
                <p>{ratings}</p>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard
