import React from 'react'

function randomNum(n1, n2) {
    return Math.floor(Math.random() * n2) + n1
}

function Random(props) {
    return (
        <p>Random value between {props.min} and {props.max} => {randomNum(props.min, props.max)} </p>
    )
}

export default Random 