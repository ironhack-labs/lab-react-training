import React from 'react'
import './Random.css'

function Random(props) {
    const randomNb = Math.round(Math.random() * (props.max - props.min) + props.min)
    return (
        <div className="Random">
            <p>Random value between {props.min} and {props.max} => {randomNb}</p>
        </div>
    );
};


export default Random

