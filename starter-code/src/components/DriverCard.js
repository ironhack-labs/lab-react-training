import React from 'react'

function DriverCard(props) {

    let rating = Math.round(props.rating)
    let render = []

    for (let i = 0; i <= rating - 1; i++) {
        render.push('★')
    }

    for (let i = render.length; i < 5; i++) {
        render.push('☆')
    }

    return (
        <div className="driver">
            <img src={props.img} alt={props.name}/>
            <div>
                <h2>{props.name}</h2>
                <h2>{render}</h2>
                <p>{props.car.model} - {props.car.licensePlate}</p>

            </div>
        </div>
    )
}

export default DriverCard
