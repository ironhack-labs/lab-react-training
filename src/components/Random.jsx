import React from 'react';
import './Random.css'


function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function Random(props) {
    return (
        <>
        <div className='random'>
            Random value between {props.min} and {props.max} => {randomNum(props.min, props.max)}
        </div>
        </>
    )
}

export default Random