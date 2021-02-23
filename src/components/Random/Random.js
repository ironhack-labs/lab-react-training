import React from 'react'
import './Random.css'

export default function Random(props) {
    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min) ) + min;
    }
    return (
        <div className='random'>
            <p>Random number between {props.min} and {props.max}: <span>{random(props.min, props.max)}</span></p>
        </div>
    )
}
