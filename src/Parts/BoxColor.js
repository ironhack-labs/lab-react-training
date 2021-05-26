import React from 'react'

export default function BoxColor(props) {
  const {r,g,b} = props
  function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  return (
    <div class='border border-dark m-4 px-2 py-4 d-flex flex-column text-center' style={{backgroundColor: `rgb(${r},${g},${b})`, color: props.text}} >
      rgb({r},{g},{b})
      {rgbToHex(r,g,b)}

    </div>
  )
}
