import React from 'react'

export default function Random(props) {
    const randomNum = Math.floor(Math.random()*(props.max - props.min + 1) + props.min);
    return (
        <div style={{textAlign:"left", border:"solid black 2px", margin:"10px", padding:"10px", fontSize: "20px"}}>
            <p>Random value between {props.min} and {props.max} : {randomNum}</p>
        </div>
    )
}
