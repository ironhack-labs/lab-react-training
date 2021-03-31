import React from 'react'

const DriverCard = (props) => {
    let stars = Math.round(props.rating)
    let starsToShow = ''
    let starsToComplete = ''
    for (let i=0; i<stars; i++) {starsToShow += '★'}
    for (let j=0; j< (5-stars); j++) {starsToComplete += '☆'}
    return (
        <div className="DriverCard card mb-3">
            <div className="row DriverCard">
                <div className="card-body text-center">
                    <img src={props.img} alt={props.name}/>
                </div>
                <div className="card-body text-center">
                    <strong className="TitleSpan">{props.name}</strong>
                    <p className="StarsSpan">{starsToShow}{starsToComplete}</p>
                    <p className="">{props.car.model} - {props.car.licensePlate}</p>
                </div>
            </div>
        </div>
    )
}

export default DriverCard