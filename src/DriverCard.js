import React from 'react';
import './App.css';

function DriverCard (props) {
    return (
        <>

        <div className="DriverCard">
            name: {props.name} |
            rating: {props.rating} |
            Model: {props.car.model} |
            licensePlate: {props.car.licensePlate} |
        </div>
            <img src={props.img} width="100px"/>
        </>
    )
}

export default DriverCard;