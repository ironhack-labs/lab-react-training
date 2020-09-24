import React from 'react'

export default function Random(props) {
    return (
        <div>
            Random value between {props.min} and {props.max} =&gt; {Math.floor(Math.random() * (props.max - props.min) + props.min)}
        </div>
    )
}