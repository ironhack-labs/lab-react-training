import React from 'react'

const BoxColor = (props) => {
    const r = props.r;
    const g = props.g;
    const b = props.b;
    return (
        <div style={{backgroundColor: `rgb(${r},${g},${b})`}}>COUCOU</div>
    )
}

export default BoxColor
