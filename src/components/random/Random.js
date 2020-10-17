import React from 'react'

export default function Random(props) {
    return (
        <div>
           <div>Random value between {props.min} and {props.max} => { Math.floor(Math.random() * (props.max - props.min + 1)) + props.min}</div>
        </div>
    )
}
