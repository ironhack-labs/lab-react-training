import React from 'react';
import Rating from '../rating/Rating';
import './DriverCard.css';

//its functional, doesnt need extending component, dosnt have state
function DriverCard(props){
    return (
        <div className="DriverCard">
            <div className="pic">
                <img width="150px" src={props.img} alt="gaddam"/>
            </div>
            <div className="info">
                <h2>{props.name}</h2>
                <Rating/>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}
export default DriverCard;