import React from 'react'

function BoxColor(props) {

    const {r, g, b} = props;
    // let boxStyle = {
    //     backgroundcolor: 'rgb(' + {r} + {g} + {b} + ')',
    // }
    
    // console.log(boxStyle)

  return (
    <div style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}} >   Hi I'm a colored box</div>
  )
}

export default BoxColor