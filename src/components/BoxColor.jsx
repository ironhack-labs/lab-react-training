import React, { Component } from 'react';


export default function BoxColor(props) {
    const colors = `rgb(${props.r}, ${props.g}, ${props.b})`;
    const style = {
        backgroundColor: colors
    }

    return (
        <div className="BoxColor" style={style}>
            { colors }
        </div>
    );
}