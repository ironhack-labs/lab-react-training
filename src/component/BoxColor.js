import React from 'react'

function BoxColor(props) {
        const divStyle = {
                backgroundColor: `rgb(${props.r},${props.g},${props.b})`
        }

        function rgb2hex(r,g,b) {
                r = r.toString(16)===`0` ? `00` : r.toString(16)
                g = g.toString(16)===`0` ? `00` : g.toString(16)
                b = b.toString(16)===`0` ? `00` : b.toString(16)
               return "#"+r+g+b
        }

        return (
                <div className='border boxColor' style={divStyle}>
                        <p> rgb({props.r},{props.g},{props.b})</p>     
                        <p>{rgb2hex(props.r,props.g,props.b)} </p>
                </div>
        )
}

export default BoxColor
