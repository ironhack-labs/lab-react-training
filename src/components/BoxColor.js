import React from 'react'

export default function BoxColor(props) {
    return (
       <div className="myCardColor" style={{backgroundColor: `rgb(${props.r},${props.g},${props.b})`}} >
           {props.children}
        </div>
    )
}
