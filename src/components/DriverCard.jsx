import React from 'react'
import { starLine } from './Rating'

const DriverCard = (props) => {
    return (
        <div className="col-11 col-sm-5 license">
            <div className="row">
                <div className="col-4 profile" style={{background: `url(${props.img}) no-repeat center center / cover`}}></div>
                <div className="col-8">
                    <h1>{props.name}</h1>
                    <span>{starLine(props.rating)}</span>
                    <p>{props.car.model} - {props.car.licensePlate}</p>
                </div>
            </div>
        </div>
    )
}
export default DriverCard
