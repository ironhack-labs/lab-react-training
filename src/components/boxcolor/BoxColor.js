import React from 'react'

export default function BoxColor(props) {
    return (
        <div>
            <div style={{backgroundColor: `rgba(${props.r}, ${ props.g}, ${props.b})`}}>
                <p>rgb({props.r}, {props.g}, {props.b} )</p>
            </div>
        </div>
    )
}

/* style = {props.style} */