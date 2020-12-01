import React from 'react'
import Rating from './Rating'

export default function DriverCard(props) {
    // console.log(props);
    const style = {
        backgroundColor: 'lightblue'
    }
    return (
        <div style={style}>
            <p>Name: {props.name}</p>
            <Rating>{props.rating}</Rating>
            <img src={props.img} alt="" width="40px"/>
            {props.car.model} - {props.car.licensePlate}
        </div>
    )
}
