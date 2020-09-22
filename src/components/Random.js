import './Components.css'

import React from 'react'

export default function Random(props) {
    console.log(props)
    const randomValue = Math.floor(Math.random() * props.max +1)
    

    return (
        <div>
            <p> This is a random value between {props.min} and {props.max} => {randomValue} </p>
        </div>
    )
}
