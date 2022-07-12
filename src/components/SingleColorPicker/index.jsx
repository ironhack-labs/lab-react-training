import { useState } from 'react'
import './SingleColorPicker.css'

const SingleColorPicker = ({ color, value, onChange }) => {

    const [val, setVal] = useState(value)
    const [backColor, setBackColor] = useState({ backgroundColor: `rgb(0,0,0)` })
    const changeHandler = (intensity) => {
        switch (color) {
            case 'r':
                setBackColor({ backgroundColor: `rgb(${intensity},0,0)` })
                break
            case 'g':
                setBackColor({ backgroundColor: `rgb(0,${intensity},0)` })
                break
            case 'b':
                setBackColor({ backgroundColor: `rgb(0,0,${intensity})` })
                break
            default:

        }
        onChange(intensity, color)
        setVal(intensity)
    }




    return (

        <div className='SingleColorPicker'>
            <div style={backColor} className='ColorArea'></div>
            <p>{color.toUpperCase()}</p>
            <input type="number" onChange={() => changeHandler(window.event.target.value, color)} value={val} />
        </div >
    )
}

export default SingleColorPicker