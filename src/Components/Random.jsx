import React from 'react'

const Random = (props) => {
    function randomNumber(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    return (
        <div style={{
            border: "2px solid black",
            fontSize: "25px",
            width: "500px",
            margin:"20px 50px",
            textAlign: "left"
        }}>
            Random value between {props.min} and {props.max} =&#x3009; {randomNumber(props.min, props.max)}
        </div>
    )
}

export default Random
