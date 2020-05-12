import React from 'react'
import './Random.css'

const Random = (props) => {
    return (
        <div className='Random'>
        <h3>Random value between {props.min} and {props.max} => {Math.floor(Math.random() * (Number(props.min) && Number(props.max)) )}</h3>
        </div>
    )
}


export default Random