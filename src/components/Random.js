import React from 'react'

export default function Random(props) {
    const randomNumber = Math.floor((Math.random()*props.max) + props.min);
    return (
        <div className='container'>
            <p>Random value between {props.min} and {props.max} ={">"} {randomNumber}</p>
        </div>
    )
}
