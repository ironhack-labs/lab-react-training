import React from 'react';

function Random(props) {
    let {min, max} = props

    const randomValue = Math.round(Math.random()*(max-min+1) + min )
    return (
        <div>
            <p>Random value between {min} and {max} is {randomValue}</p>
        </div>
    )
}

export default Random;