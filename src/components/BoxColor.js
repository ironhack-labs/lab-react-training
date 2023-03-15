import React from 'react'

function BoxColor({ r, g, b }) {

  return (
    <div className='d-flex flex-row border border-dark m-1' style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
      <p>rgb({r},{g},{b})</p>
    </div>

  )
}

BoxColor.defaultProps = {
  r: '',
  g: '',
  b: '',
};


export default BoxColor