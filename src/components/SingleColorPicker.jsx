import React from 'react'
import '../styles/SingleColorPicker.css'

function SingleColorPicker(props) {
  return (
    <div className='SingleColorPicker'>
        <h5>{props.color.toUpperCase()} :</h5>
        <input onChange={(e) => props.onChange(props.color, e.target.value)} placeholder="" min='0' max='255' type="number"></input>
    </div>
  )
}

export default SingleColorPicker