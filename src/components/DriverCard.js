import React from 'react'
import Rating from './Rating'
export default function DriverCard(props) {
    return (
        <div>
            <div className="DriverCard">
                    <div className="profileDriver">
                        <img src={props.img}/>
                    </div>
                    <div className="infoDriver">
                        <ul>
                            <li>   
                                <h2>{props.name}</h2>
                            </li>
                            <li>
                            <Rating>{props.rating}</Rating>
                            </li>
                            <li className="model">
                                <p>{props.car.model} - {props.car.licensePlate}</p>
                            </li>
                        </ul>
                        
                    </div>
            </div>
        </div>
    )
}
