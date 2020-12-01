import React from 'react'

export default function Random(props) {
    Math.ceil(props.min);
    Math.floor(props.max)
    return (
        <div className="box">
            <p>Random value between {props.min} and {props.max} => {Math.floor(Math.random() * (props.max - props.min) + props.min)}</p>
        </div>
    )
}
