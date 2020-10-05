import React from 'react'
import './random.css';

const Random = (props) => {
    return (
        <div className="random">
            Random value bewteen {props.min} and {props.max} : {Math.floor(Math.random()*(props.max - props.min +1))+props.min}
        </div>
    )
}

export default Random
