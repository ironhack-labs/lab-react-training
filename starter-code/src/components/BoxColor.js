import React from 'react'

function BoxColor({r,g,b}) {
    const style = {
        backgroundColor:`rgb(${r},${g},${b})`
    }
    let rhex=Number(r).toString(16)
    let ghex=Number(g).toString(16)
    let bhex=Number(b).toString(16)
    return (
        <div style={style}>
            <p>rgb({r},{g},{b})</p>
            <p>#{rhex}{ghex}{bhex}</p>
        </div>
    )
}

export default BoxColor
