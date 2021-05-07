import React from 'react';

export default function Greetings(props) {
    return (
        <div className="BoxColor box" style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}}>
            rgb({props.r}, {props.g}, {props.b})
        </div>
    )
}