import React from 'react'

function SingleColorPicker({ color, value, onChange }) {
  const singleRGBColor = `rgb(${color === "r" ? value : 0}, ${color === "g" ? value : 0}, ${color === "b" ? value : 0})`

  const handleChangeColor = (event) => {
    onChange(color, event.target.value);
  }

  return (
    <div className='d-flex gap-1 align-items-center'>
      <label htmlFor={color} ><div className='p-3 border border-black border-2' style={{ backgroundColor: singleRGBColor }} /></label>
      <span className='fs-5 fw-semibold'>{color.toUpperCase()}:</span>
      <input type="number" 
        id={color} 
        name={color} 
        onChange={handleChangeColor} 
        value={value} 
        min="0"
        max="255"
      />
    </div>
  )
}

export default SingleColorPicker;
