import React from 'react'
import './Random.css';

export default function Random(props) {
    // console.log(props.max);
    const randomNum = Math.floor(Math.random() * (props.max - props.min) + props.min)
    return (
        <div className="randomNum-container">
            <p>Random value between {props.min} and {props.max} => {randomNum}</p>
        </div>
    )
}
