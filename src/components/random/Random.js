import React from 'react'

export default function Random(props) {
    let newNum = Math.random() * (props.max.toString() - props.min.toString()) + props.min.toString();
    return (
        <div>
            <p>Random value between {props.min.toString()} and {props.max.toString()} => {Math.round(newNum)}</p>
        </div>
    )
}