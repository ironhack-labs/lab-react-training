import React from 'react'

export default function Random(props) {

    function randomInteger(props) {
        return Math.floor(Math.random() * (props.max - props.min)) + props.min;
      }

    return (
        <div>
            <p>Random value between {props.min} and {props.max} => {randomInteger(props)}</p>
        </div>
    )
}
