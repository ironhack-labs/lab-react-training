import React from 'react'
import './RandomNum.css'

export default function RandomNum(props) {
    const min = props.min;
    const max = props.max;
    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min +1) + min)
    };


    return (
        <div>
            <h2 className="random">A random value between {props.min} and {props.max} is {getRandomNumber(min, max)}</h2>
        </div>
    )
}
