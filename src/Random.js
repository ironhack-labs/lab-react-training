import React from 'react'

export default function Random(props) {
    let randomNumber = Math.floor(Math.random() * props.max)
        return (
            <p>Random valuer between {props.min} and {props.max} {'=>'} {randomNumber} </p>
        )
}
