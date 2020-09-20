import React from 'react';
import './DriverCard.css';

function DriverCard(props) {
    const rate = Math.round(props.rating);

    let stars=''
    for(let i = 0; i < 5; i++) {
        if (i < rate) {
            stars += '★';
        } else {
            stars += '☆'
        }
    }

    return (
        <div className="container-drive-card">
            <img src={props.img} alt="avatar"></img>
            <div className="drive-card-text">
                <p>{props.name}</p>
                <p>{stars}</p>
                <span>{props.car.model} - {props.car.licensePlate}</span>
            </div>
        </div>
    );
}


export default DriverCard;