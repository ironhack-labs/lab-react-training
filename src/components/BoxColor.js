import React from 'react';

export default function BoxColor(props) {

    return (
        <div style=
        {{ 
            width:'200px',
            height:'100px',
            backgroundColor:`rgb( ${props.r},${props.g},${props.b} )`
        }}>            
        </div>
    )
}
