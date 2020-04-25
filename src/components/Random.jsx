import React from 'react'
import './Random.css'

export default function Random(props) {
    
    const result = props.min + Math.floor(Math.random()*(props.max - props.min))
    console.log(result)
    return (
        <div className='message-box'>
            <p>Random value between {props.min} and {props.max} => {result}</p>
        </div>
    )
}
