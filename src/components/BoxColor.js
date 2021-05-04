import React from 'react';

export default function BoxColor(props) {
    return (
        <>
            <div>rgb({props.r},{props.g},{props.b})</div>
        </>
    )
}

// How and where do I implement this logic?
// <div style={{color: rgb(props.r, props.g, props.b)}}></div>