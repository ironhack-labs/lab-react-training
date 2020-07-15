import React from 'react'
import Rating from './Rating'


export default function DriveCar(props) {
    return (
        <div>
            <div className="driver">
                <img src={props.img}/>
                <div className="driverInfo">
                    <h4>{props.name}</h4>
                    <Rating>{props.rate}</Rating>
                    <p>{props.car.model} - {props.car.licensePlate}</p>
                </div>
            </div>
        </div>
    )
}
