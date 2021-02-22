import React from 'react'

export default function Random(props) {
    let randomNumber = Math.floor(Math.random()* (props.max - props.min) + props.min)
    return (
        <div>
            <p> Random Value Between {props.min} and {props.max} 👉 {randomNumber} </p>
        </div>
    )
}
