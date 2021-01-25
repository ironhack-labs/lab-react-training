import React from 'react'
import Rating from '../rating/Rating'
import './DriverCard.css'

function DriverCard(props) {
    return(
    <div className='driverCard'>
        <div>
            <img src={props.img} alt={props.name}/>
        </div>  
        <div>
            <h3>{props.name}</h3>
            <Rating>{props.rating}</Rating>
            <p>{`${props.car.model}`} - {`${props.car.licensePlate}`}</p>
        </div>
    </div>

    )
}


export {DriverCard};