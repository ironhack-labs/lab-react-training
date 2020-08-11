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
            <h2 className="random">Random value between {props.min} and {props.max} => {getRandomNumber(min, max)}</h2>
        </div>
    )
}
