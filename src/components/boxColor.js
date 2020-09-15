import React from 'react'

export default function BoxColor({r, g, b}){
    return(
        <div className="BoxColor box" style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}}>
            <p>rgb({r}, {g}, {b})</p>
            <p>#ff0000</p>
        </div>
    )
}