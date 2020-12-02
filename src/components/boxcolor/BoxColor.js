import React, { Component } from 'react';
import './BoxColor.css'

export default function BoxColor(props) {
    const colors = `rgb(${props.r}, ${props.g}, ${props.b})`;
    const style = {
        backgroundColor: colors
    }

    return (
        <div className="box" style={style}>
            { colors }
        </div>
    );
}
