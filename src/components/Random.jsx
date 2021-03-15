import React from 'react'

function Random(props) {
    function randomIntFromInterval() { // min and max included 
        return Math.floor(Math.random() * (props.max - props.min + 1) + props.min);
      }
    return (
        <div style={{ border: "1px solid black", textAlign: "left", padding:5, margin: 5}}>
            <p>Random value between <span>{props.min}</span> and <span>{props.max}</span> = <span>{randomIntFromInterval()}</span></p>
        </div>
    )
}

export default Random
