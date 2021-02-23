import React from 'react'
import './Random.css'

export default function Random(props) {
    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min) ) + min;
    }
    return (
        <div className='random text-2xl'>
            <p className='bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-yellow-500'>Random number between {props.min} and {props.max}:
             <span> {random(props.min, props.max)}</span></p>
        </div>
    )
}
