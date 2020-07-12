import React from 'react'
import "./Random.css"

function Random(props) {
    const randomNumber = (min, max) => {
        min = props.min
        max = props.max
        return Math.floor (Math.random() * (max - min) + min)
    }
    return (
        <div className="random">
            <p>Random number between: {props.min} and {props.max} = {randomNumber(props.min, props.max)}</p>
        </div>
    )
}

export default Random
