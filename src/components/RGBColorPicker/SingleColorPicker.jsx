import React from 'react'
import './ColorPickerStyle.css'

const SingleColorPicker = ({ color, onChange, value }) => {

    return (
        <div className='SingleColorPicker'>
            <div className='color'
            style= {{ backgroundColor: `rgb(
                ${color === 'r' ? value : 0}, 
                ${color === 'g' ? value : 0}, 
                ${color === 'b' ? value : 0})` 
                }}>
                </div>
            <div>
                <label htmlFor="color">{color.toUpperCase()}</label>
                <input type="number" value={ value } onChange={ onChange } max={255} min={0}/>
            </div>
        </div>
    )
}

export default SingleColorPicker