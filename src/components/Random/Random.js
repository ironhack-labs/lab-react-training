import React from 'react';

const Random = (props) => {
    const randomNum = Math.floor(Math.random() * props.max + props.min);

    return (
        <div>
            <p>Random number between {props.min} and {props.max} = {randomNum}</p>
        </div>
    )
}

export default Random;