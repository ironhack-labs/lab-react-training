import React from 'react'

export default function Random(props) {
    let num = Math.round(Math.random() * (props.max - props.min) + props.min);

    return (
        <>
        <div className="container tabla">
            Random value between {props.min} and {props.max} => {num}
        </div>
        <br />
        </>
    )
}
