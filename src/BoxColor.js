import React from 'react';

const Box= (props) => {
    return (
        <div className="box border" style={{ backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}}>
        <h2> RGB ({props.r}, {props.g}, {props.b})</h2>
        </div>

    )
}

export default function BoxColor(){
    return (
        <div>
            <Box r={255} g={0} b={0} />
            <Box r={128} g={255} b={0} />
        </div>
    )
}