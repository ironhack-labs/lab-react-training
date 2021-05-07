import React from 'react'
import Rating from '../rating/Rating'
import './DriverCard.css'

const DriverCard = (props) =>{
    console.log(props.car.model)
    return (
        <section>
            <div>
                <img className="profile" src={props.img} alt=""/>
                {props.name}
                <Rating>{props.rating}</Rating>
                {props.car.model} - {props.car.licensePlate}
            </div>
        </section>
    )
}

export default DriverCard