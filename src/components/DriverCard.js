import React from 'react';
import Rating from './Rating';
import './DriverCard.css';

function DriverCard(props) {
    return (
        <div className='driver'>
        <img src={props.img} alt="driver" />
        <p><strong>{props.name}</strong></p>
        <Rating>{props.rating}</Rating>
        <p>{props.car.model} - {props.car.licensePlate}</p>
        </div>
    )
}

// function DriverCard({name, rating, car: {model, licensePlate}, img}) {
//     return <div>
//         <h2>{ name }</h2>
//         <p>model: {model}</p>
//         <p>licensePlate: {licensePlate}</p>
//         <img src={img} alt={name}/>
//         <Rating>{rating}</Rating>
//     </div>
// }

export default DriverCard;