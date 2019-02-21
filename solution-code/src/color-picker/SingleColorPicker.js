import React from 'react'

export default function SingleColorPicker(props) {
  let r = 0
  let g = 0
  let b = 0
  if (props.color === 'r')
    r = props.value
  if (props.color === 'g')
    g = props.value
  if (props.color === 'b')
    b = props.value
  let backgroundColor = `rgb(${r},${g},${b})`
  return (
    <div className="SingleColorPicker flex-align-items-center">
      <div
        className="color-box"
        style={{ backgroundColor: backgroundColor }} />
      {props.color.toUpperCase()}:
        <input
        type="number"
        value={props.value}
        onChange={e => props.onColorChange(e.target.value,props.color)} />
    </div>
  )
}
