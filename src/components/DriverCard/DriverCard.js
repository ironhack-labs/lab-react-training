import React from 'react'
import './DriverCard.css'
import Rating from '../Rating/Rating'

export default function DriverCard(props) {
    return (

        <div className='driverCard'>
            <div className="pic" style={{ backgroundImage: `url(${props.img})` }}>
                {/* <img src={props.img} alt={props.name} /> */}
            </div>
            <div className="driverInfo" >
                <h2>{props.name}</h2>
                <Rating total={5} rating={props.rating} />
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>

    )
}
