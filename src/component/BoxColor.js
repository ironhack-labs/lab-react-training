import React from 'react';

const BoxColor = props => {
    return (
        <div className="box" style={{background: `rgb(${props.r}, ${props.g}, ${props.b})`}}>
        {props.children}

        </div>
    )
}

export default BoxColor;