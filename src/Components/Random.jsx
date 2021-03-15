import React from 'react';

function Random(props) {
    function getRandom() {
       return Math.floor(Math.random() * (props.max - props.min) + props.min);
    }
    
    return (
        <div>
            Random value between {props.min} and {props.max} => {getRandom()}
        </div>
    )
}

export default Random
