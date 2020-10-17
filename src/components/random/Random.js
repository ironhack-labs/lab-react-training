import React from 'react'

export default function Random(props) {
    const getRandomNumber = (min, max) => {
        return Math.round(Math.random() * (max - min) + min)
    }
    console.log(props)
    return (
        <div>
            <p>Random value between {props.min} and {props.max} => {getRandomNumber(props.min, props.max)}</p>
        </div>
    )
}
