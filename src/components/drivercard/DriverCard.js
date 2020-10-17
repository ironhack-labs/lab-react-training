import React from 'react'

export default function DriverCard(props) {
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.rating}</div>
            <img src="{props.img}" alt=""/>
            <div>{props.car.model}{props.car.licensePlate}</div>
        </div>
    )
}
