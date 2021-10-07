import React from 'react'

function BoxColor({r,b,g}) {
    const divStyle = {
        color: 'blue',
        backgroundColor: `rgb(${r},${b},${g})`
      };
    return (
        <div style= {divStyle} >
           <p>rgb{r}{g}{b}</p>
        </div>
    )
}

export default BoxColor
