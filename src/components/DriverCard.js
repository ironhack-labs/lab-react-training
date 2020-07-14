import React from 'react'
import Rating from './Rating'

function divStyle(color, bgColor) {
    return{
            color: color, 
            background:  bgColor
        }
}

const DriverCard = props => {
        return (
            <div className='container-dcard' style={divStyle(props.color, props.bgColor)}> 
                <div>
                    <img className='dcard-img' src={props.img} alt={props.lastName}/>
                </div>
                <div className='dcard-text'>
                    <p><b>{props.name}</b></p>
                    <Rating rating={props.rating}/>
                    <p>{props.car.model} - {props.car.licensePlate}</p>
                </div>
            </div>
        )
}

export default DriverCard