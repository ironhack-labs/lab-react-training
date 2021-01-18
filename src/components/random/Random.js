import React from 'react';

function Random(props) {
    let randomNumber = Math.floor(Math.random() * props.max.toString() + props.min.toString());     // returns a random integer from 0 to 9

    return(
        <div className='Random box'>
            <p>Random value between {props.min.toString()} and {props.max.toString()} => {randomNumber.toString()}</p>
        </div>
    )
}

export {Random}