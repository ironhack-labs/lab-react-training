import React from 'react'
import { render } from 'react-dom'

function Driver (props) {

let rating = Math.round(props.rating)
let render = []

for (let i = 0; i <= rating - 1; i++)
render.push('★')

}

for (let i = render.length; i < 5; i++){
    render.push('☆')
}

return (
    <div className="driverCard">
        <img src={props.img} alt=""/>
            <div>
            <h2>{props.name}</h2>
            <h2>{render}</h2>
            <h2>{props.car.model} - {props.car.licensePlate}</h2>
            </div>
    </div>
)

export default Driver;