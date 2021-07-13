import React from 'react'

export default function DriverCard(props) {
    let stars = ''
    switch (Math.round(props.rating)) {
        case 0:
            stars = '☆☆☆☆☆';
            break;
        case 1:
            stars = '★☆☆☆☆';
            break;
        case 2:
            stars = '★★☆☆☆';
            break;
        case 3:
            stars = '★★★☆☆';
            break;
        case 4:
            stars = '★★★★☆';
            break;
        case 5:
            stars = '★★★★★';
            break;
    }
    return (
        <>
        <div className="driverCard">
            <img src={props.img} />
            <div className="cardText">
                <p>{props.name}</p>
                <p>{stars}</p>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
        </>
    )
}