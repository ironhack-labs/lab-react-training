import React from 'react';
import "./../styles/Random.css";

const Random = (props) => {
    console.log(props)

    let result = Math.floor(Math.random() * (props.max-props.min) + props.min);

    return (
        <div className="random">

        <p>Random value between {props.min} and {props.max} => {result}</p>
            
        </div>
    )
}

export default Random
