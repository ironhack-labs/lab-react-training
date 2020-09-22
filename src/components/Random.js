import React from 'react'

export default function Random(props) {
    const rand = Math.floor(Math.random() * (props.max - props.min) + props.min)
    return (
        <div>
           <p>Random value between {props.min} and {props.max}: {rand}</p>
        </div>
    )
}

