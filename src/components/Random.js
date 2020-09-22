import React from 'react'

function Random(props) {
    const randomNb = Math.round(Math.random() * (props.max - props.min) + props.min)

    return (
        <div>
            <p>Random value between {props.min} and {props.max} =&gt; {randomNb}</p>
        </div>
    );
};


export default Random;