import React from 'react'

const BoxColor = ({r, g ,b}) => {
    const color = {
        backgroundColor: `rgb(${r},${g},${b})`
    }
    const hexColor = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  return (
    <div style={color}>
        <p>rgb{r},{g},{b}</p>
        <p>{hexColor}</p>
    </div>
  )
}

export default BoxColor