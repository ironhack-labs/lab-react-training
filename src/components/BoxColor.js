import React from 'react'

export default function BoxColor(props) {

    return (
        <>
        <div className="container tabla2" style={{background: `rgb(${props.r},${props.g},${props.b})`}}>
            <p className="center" style={{color: 'white'}}>rgb({props.r},{props.g},{props.b})</p>
        </div>
        <br/>
        </>
    )
}
