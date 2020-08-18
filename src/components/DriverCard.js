import React from 'react';
import Rating from './Rating'


const DriverCard = (props) => {
    return (
        <div className="driverCard">
            <div className="picture">
                <img src={props.img} alt={props.name} width="100px" />
            </div>
            <div className="infos">
                <p className="driver">{props.name}</p>
                <div className="driver"><Rating>{props.rating}</Rating></div>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard
