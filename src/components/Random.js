import React from 'react';

export default function Random(props) {
    return (
        <>
            <p>Random value between {props.min} and {props.max}:</p>
        </>
    )
}

// How and where do I implement this logic?
// Math.floor(Math.random() * ({props.max} - {props.min}) ) + {props.min};