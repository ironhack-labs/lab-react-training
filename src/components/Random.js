import React from 'react'

export default function Random(props) {
    // console.log(props);
    let number = Math.floor(Math.random() * (props.max - props.min)) + props.min
    return (
        <div>
            Random value between {props.min} and {props.max}: {number}
        </div>
    )
}
