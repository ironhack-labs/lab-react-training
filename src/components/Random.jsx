import React from 'react'

function Random(props) {
    return (
        <div>
            Random value between {props.min} and {props.max} -- {randomIntFromInterval(props.min, props.max)}        
        </div>
    )
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export default Random
