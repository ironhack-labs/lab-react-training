import React from 'react'

function Random(props) {
    return (
        <div>
            random value between {props.min} and {props.max} = {Math.floor(Math.random() * (props.max - props.min) + props.min)} 
        </div>
    )
}

export default Random;
