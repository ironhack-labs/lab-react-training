import React from 'react';

function Random(props) {
    const sum=Math.floor(Math.random() * (props.max - props.min) + props.min);
    return(
        <div className='box'>
        <p>Random value between {props.min} and {props.max} => {sum}
        </p>
        </div>
    )
}

export default Random;