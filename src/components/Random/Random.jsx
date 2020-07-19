import React from 'react'
import './Random.css'

const Random = props => {
    const randomNumber =  Math.floor(Math.random() * (props.max - props.min)) + props.min
    return (
    <h1 className="randomNumber">Random value between {props.min} and {props.max} {`=>`} {randomNumber}</h1>
    )
}

export default Random
