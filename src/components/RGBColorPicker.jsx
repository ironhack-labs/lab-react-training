import React, { useState } from 'react'
import SingleColorPicker from './SingleColorPicker'
import '../styles/RGBColorPicker.css'

function RGBColorPicker(props) {
    const [rValue, setRValue] = useState(0)
    const [gValue, setGValue] = useState(0)
    const [bValue, setBValue] = useState(0)

    function onChange(color, value) {
        switch(color) {
            case 'r':
                setRValue(value)
                break;
            case 'g':
                setGValue(value)
                break;
            case 'b':
                setBValue(value)
                break
        }
    }

  return (
    <div className='RGBColorPicker'>
        <div className='single'>
            <div className='square' style={{backgroundColor: `rgb(${rValue}, 0, 0)`}}>  </div>
            <SingleColorPicker color={'r'} value={rValue} onChange={onChange} />
        </div>
        <div className='single'>
            <div className='square' style={{backgroundColor: `rgb(0, ${gValue}, 0)`}}></div>
            <SingleColorPicker color={'g'} value={rValue} onChange={onChange} />
        </div>
        <div className='single'>
            <div className='square' style={{backgroundColor: `rgb(0, 0, ${bValue})`}}></div>
            <SingleColorPicker color={'b'} value={rValue} onChange={onChange} />
        </div>
        <div className='single'>
            <div className='square' style={{backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`}}></div>
            <h5>RGB({rValue}, {gValue}, {bValue})</h5>
        </div>
    </div>
  )
}

export default RGBColorPicker