import React from 'react';
import './BoxColor.css';

export default function BoxColor(props) {
    return (
        <div className="BoxColor-container" style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}}>rgb({props.r}, {props.g}, {props.b})</div>
    )
}