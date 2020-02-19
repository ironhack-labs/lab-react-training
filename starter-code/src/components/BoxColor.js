import React from 'react'

function BoxColor({r,g,b}) {
    const style = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }
    let hexR = Number(r).toString(16)
    let hexG = Number(g).toString(16)
    let hexB = Number(b).toString(16)

    hexR = hexR.length < 2 ? 0+hexR : hexR
    hexG = hexG.length < 2 ? 0+hexG : hexG
    hexB = hexB.length < 2 ? 0+hexB : hexB

    return (
        <div className="boxcolor" style={style}>
            <p>rgb({r},{g},{b})</p>
            <p>#{hexR+hexG+hexB}</p>
        </div>
    )
}

export default BoxColor
