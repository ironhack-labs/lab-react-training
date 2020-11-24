import '../style/Random.css'
import React from 'react';


function Random(props) {
    return (
        <div className="Random">
            <h1>Random value between {props.min} and {props.max}.</h1>
        </div>
    )
}

export default Random;