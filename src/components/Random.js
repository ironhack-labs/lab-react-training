import React from 'react'

function Random(props) {
    return (
        <div className="greetings">
            <p>Random value between {props.min} and {props.max} => {Math.round(Math.random() * (props.max - props.min) + props.min)} </p>
        </div>
    )
}

export default Random;