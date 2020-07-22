import React from 'react'

const Random = (props) => {
    function randomize (minNb,maxNb) {
    const range = maxNb - minNb;
    let randomNb = Math.floor(Math.random() * range) + minNb;
    return randomNb;
    }
    return (
        <div>
            Random value between {props.min} and {props.max} => {randomize(props.min,props.max)};
        </div>
    )
}

export default Random
