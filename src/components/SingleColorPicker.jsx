import React from 'react'
import './../styles/iteration16.css'

export default function SingleColorPicker({color, value, onCHange}) {

    const getColor = (colorName, value) => {
        const rgb = {r:0, g:0, b:0}
        rgb[colorName] = value ;
        return rgb
    }

    return (
        <div className="Lifting__color-picker">
            <div 
                className="Lifting__color-box"
                style={{backgroundColor: "red"}}>
            </div>
            <div>
                {color} 
                <input type="Number"/>
            </div>
        </div>
    )
}
