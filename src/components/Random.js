import React from 'react'

export default function Random(props) {
    function random(min, max) {
        return Math.floor(Math.random() * max + min)
    }
    return (
        <div>
        random value between {props.min} and {props.max} {'=>'} {random(props.min, props.max)}
        </div>
    )
}
