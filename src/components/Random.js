import React from 'react'

function Random(props) {
    let randomNumber = props.min + Math.floor(Math.random() * props.max)
    return (
        <p className="container">Random value between {props.min} and {props.max} => {randomNumber}</p>
    )
}


export default Random