import React from 'react'

function BoxColor(props) {
    const {r, g, b} = props;

    const divStyle = {
        color: 'black',
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    };

  return (
    <div className='container' style={divStyle}>
        rgb({r}, {g}, {b})
    </div>
  )
}

export default BoxColor