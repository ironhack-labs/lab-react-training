import React from 'react'

function SingleColorPicker({ color, value, onChange}) {

  let bgColor = ''
  if(color === 'r') {
    bgColor = 'red'
  } else if (color === 'g'){
    bgColor = 'green'
  } else {
    bgColor = 'black'
  }

  const handleGetValue = (ev) => {
    value = ev.target.value
    onChange(value, color)
  }

  return (
    <div className='d-flex align-items-center'>
      <div className='mx-2 square' style={{backgroundColor: `${bgColor}`}}></div>
      <div>
        <label className='mx-2' htmlFor="number">{color.toUpperCase()}:</label>
        <input value={value} onChange={handleGetValue} type="number" id="number" name="number" min="0" max="255" />
      </div>
    </div>
  )
}

export default SingleColorPicker