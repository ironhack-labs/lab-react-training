import React from 'react'

function BoxColor({r, g, b}) {

    let R = r.toString(16)
    let G = g.toString(16)
    let B = b.toString(16)

    if(R === '0') R += '0'
    if(G === '0') G += '0'
    if(B === '0') B += '0'

    const hex = [R, G, B]

    const divStyle = {
        backgroundColor: `rgb(${r},${g},${b})`
    }
  return (
    <div className='boxColor' style={divStyle}>
    <div className="colorDiv">#{hex}</div>
    <div className="colorDiv">rgb({r},{g},{b})</div>
    </div>
  )
}

BoxColor.defaultProps = {
    r: 100,
    g: 100,
    b: 100
}

export default BoxColor
