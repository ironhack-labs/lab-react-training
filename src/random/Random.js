import React from 'react'

export default function Random(props) {
    let min = Math.ceil(props.min);
    let max = Math.floor(props.max);
    let randomNum = Math.floor(Math.random() * (max - min + 1) + min)
    return (
        <div className="random-box">
            <h2>
                Random value between {props.min} and {props.max} => {randomNum}
            </h2>
        </div>
    )
}
