import React from 'react'

export default function DriverCard(props) {
    const stars = (rating) => {
        let result = '';
        for (let i = 1; i <= 5; i++) {
            if (i >= 1 && i <= Math.round(rating)) {
                result += '★'
            } else {
                result += '☆'
            }
        }
        return result;
    }

    return (
        <div className="driver-card">
            <img src={props.img} alt="profile picture of drive"/>
            <div className="text">
                <p>{props.name}</p>
                <p>{stars(props.rating)}</p>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}
