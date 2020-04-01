import React from 'react'
import index from './index.css'
import Rating from './Rating' // importamos rating del ejercicio anterior para usarlo aqui

const DriverCard = (props) => {
    return (
        <div className='it-back'>
            <p>{props.name}</p>
            <img className="img-class" src={props.img} alt=""/>
            <Rating>{props.rating}</Rating>
            <p>{props.car.model}-{props.car.licensePlate}</p>
            
        </div>
    )
}

export default DriverCard
