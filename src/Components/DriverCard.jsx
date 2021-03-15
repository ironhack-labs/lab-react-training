import React from 'react'

function DriverCard(props) {
    return (
        <div>
        <img src={props.img}/>
            <h1>{props.name}</h1>
            <p>{props.rating}</p>
            <p>{props.car.model}</p>

        </div>
    )
}

export default DriverCard;
