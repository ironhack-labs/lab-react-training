import React from 'react'

export default function Random(props) {
    return (
        <div className="random-card">
            Random value between {props.min} and {props.max} => {Math.floor(Math.random() * props.max) + props.min}
        </div>
    )
}
