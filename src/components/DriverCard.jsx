import React from 'react';
import "./../styles/DriverCard.css";


function DriverCard(props) {
    return (
        <div id="driverCard" >
            <img src={props.img} alt="photo"/>
            <div id="driverInfo">
                <p>{props.name}</p>
                <p></p>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard
