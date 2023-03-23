import React, { useState } from 'react'
import SingleColorPicker from './SingleColorPicker'

function RGBColorPicker() {

  const [rValue, setRvalue] = useState(0)
  const [gValue, setGvalue] = useState(0)
  const [bValue, setBvalue] = useState(0)

  const handleChangeValue = (newValue, color) => {
    if(color === 'r') {
      setRvalue(newValue)
    } else if (color === 'g'){
      setGvalue(newValue)
    } else {
      setBvalue(newValue)
    }
  }

  return (
    <div>
      <SingleColorPicker
        color="r"
        value={rValue}
        onChange={handleChangeValue}
      />

      <SingleColorPicker
        color="g"
        value={gValue}
        onChange={handleChangeValue}
      />

      <SingleColorPicker
        color="b"
        value={bValue}
        onChange={handleChangeValue}
      />
      <div className='d-flex align-items-center'>
        <div className='mx-2 square' style={{backgroundColor: `rgb(${rValue},${gValue},${bValue})`}}></div>
        <p>rgb {`(${rValue},${gValue},${bValue})`}</p>
      </div>
    </div>
  )
}

export default RGBColorPicker