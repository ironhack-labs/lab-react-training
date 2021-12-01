import React from 'react'

export default function Random(props) {
    let random = Math.floor(Math.random() * props.max) + props.min
    return (
        <div>
            <p>Random number between {props.min} and {props.max} = {random}</p>
        </div>
    )
}
