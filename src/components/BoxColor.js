import React from 'react'

 function BoxColor({r,g,b}) {
    const divStyle = {
        color: 'blue',
        background: `rgb(${r},${g},${b})`
    };
    return (
        <div  style={divStyle} >
          <p>rgb{r}{g}{b}</p>      
        </div>
    )
}

// 3. EXPORTACIÓN
export default BoxColor