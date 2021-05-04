import React from 'react';

const Random = (props) => {
    return <h3>Random Value between {props.min} and {props.max} ={'>'} {Math.floor((Math.random() * (props.max - props.min+1)) + props.min)}</h3>
}

export default Random