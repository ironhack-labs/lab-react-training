import React from 'react'

function BoxColor(props) {
    const { r, g, b } = props;
    const divStyle = {background: `rgb(${r}, ${g}, ${b})`,
};
  return (
    <div style={divStyle} className='IdCard'>
        <p>rgb {r} {g} {b}</p>
    </div>
  )
}

export default BoxColor