import React from 'react';

export default function BoxColor(props) {

        return (
        <div style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`, width: '400px', height: '100px', margin: '10px auto', border: '1px solid black', textAlign: 'center', lineHeight: '100px'}}>rgb({props.r}, {props.g}, {props.b})</div>
        )
}