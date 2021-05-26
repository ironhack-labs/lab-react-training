import React from 'react'
import Rating from './Rating'

export default function DriverCard(props) {
    return (


        <div class='m-4 d-flex justify-content-center border text-white border-0 rounded bg-primary p-4'>
            <div class='overflow-hidden rounded-circle m-1' style={{height: '120px', width: '120px'}}>
                <img class='align-self-center'class='card-ima-top h-100 'src={props.img} alt="" ></img>
            </div>
            <div class='d-flex flex-column justify-content-between p-1'>
                <div class='h5 ml-4'>{props.name}</div>
                <Rating rate={props.rating}></Rating>
                <div class='ml-4'>{props.car.model} - {props.car.licensePlate}</div>
            </div>
        </div>
    )
}
