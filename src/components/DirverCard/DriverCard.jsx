import React from 'react'
import "./DriverCard.css"

const DriverCard = (props) => {
const {name, rating, img, car:{model, licensePlate}} = props

    return (
        <div>
        <img className="driver" src={img} alt="mugshot"/>
        <h3>{name}</h3>
        <p>{rating}</p>
            <p>{model} - {licensePlate}</p>
        </div>
    )
}

export default DriverCard
