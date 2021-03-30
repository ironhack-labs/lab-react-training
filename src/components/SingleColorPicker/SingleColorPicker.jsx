import React from 'react'
import './SingleColorPicker.scss'

const SingleColorPicker = ({ color, onChange, value }) => {

    return (
        <div className="SingleColorPicker">
            <div className="colorSquare" style={{ backgroundColor: color }}></div>
            <div>
                <label htmlFor="color">R: </label>
                <input type="number" id="color" value={ value } onChange={ onChange } />
            </div>
        </div>
    )
}

export default SingleColorPicker
