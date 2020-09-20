import React from 'react'

function starLine(rate) {
    const floorNum = Math.round(rate)

    if (floorNum === 1) {
        return '★ ☆ ☆ ☆ ☆'
    } else if (floorNum === 2) {
        return '★ ★ ☆ ☆ ☆'
    } else if (floorNum === 3) {
        return '★ ★ ★ ☆ ☆'
    } else if (floorNum === 4) {
        return '★ ★ ★ ★ ☆'
    } else if (floorNum === 5){
        return '★ ★ ★ ★ ★'
    } else {
        return '☆ ☆ ☆ ☆ ☆'
    }
}

const DriverCard = (props) => {
    return (
        <div className="col-12 col-sm-5 license">
            <div className="row">
                <div className="col-4 profile" style={{background: `url(${props.img}) no-repeat center center / cover`}}></div>
                <div className="col-8">
                    <h1>{props.name}</h1>
                    <span>{starLine(props.rating)}</span>
                    <p>{props.car.model} - {props.car.licensePlate}</p>
                </div>
            </div>
        </div>
    )
}
export default DriverCard
