import React from 'react'
import Rating from './Rating'

export default function DriverCard(props) {
    return (


        <div class='driver'>
            <div class='driver-info' style={{height: '120px', width: '120px'}}>
                <img class='driver-img'src={props.img} alt="" ></img>
            </div>
            <div class='drive'>
                <div class='h5-driver'>{props.name}</div>
               <div class='h5-driver'> <Rating rate={props.rating}></Rating></div>
                <div class='h5-driver'>{props.car.model} - {props.car.licensePlate}</div>
            </div>
        </div>
    )
}
