import React from 'react'

function BoxColor(props) {
    const {r, g, b} = props;

    const style = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
    }
  return (
    <div className='boxcolor-card' style={style}>
        <p>rgb({r}, {g}, {b})</p>
    </div>
  )
}

export default BoxColor;
