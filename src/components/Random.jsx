import React from 'react'
import "../styles/Greeting.css"

const Random = (props) => {

  

    function Rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    return (
        <div className="box__greeting">
            <h2 className="greeting">Random value between {props.min} and {props.max} => {Rand(props.min, props.max)}</h2>
        </div>
    )
}

export default Random
