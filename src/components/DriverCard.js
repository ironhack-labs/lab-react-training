import React from 'react'
import Rating from './Rating'

function DriverCard(props){

    return(
        <div className="DriverCard">
            <div className="img">
                <img src={props.img} alt={props.name}/>
            </div>
            <div className="DriverInfo">
                <h2>{props.name}</h2>
                <Rating>{props.rating}</Rating>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard