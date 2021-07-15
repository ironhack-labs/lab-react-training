import React from 'react';

function Random (props) {
    return (
        <p>

            {Math.floor(Math.random() * (props.max - props.min + 1)) + props.min} 

        </p>
    )
}

export default Random;