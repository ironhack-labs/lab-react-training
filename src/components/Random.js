import React from 'react';
import '../styles/Random.css';

function Random(props) {
    function randomNum() {
        var result = Math.floor(Math.random() * (props.max - props.min)) + props.min;
        return result;
    }

    return ( <
        div className = "Random" >
        <
        p > Random value between {
            props.min
        }
        and {
            props.max
        } = {
            randomNum(props.result)
        } < /p> < /
        div >
    )
}

export default Random;