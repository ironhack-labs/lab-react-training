import React from 'react'

export default function SingleColorPicker({name, color, value, onChange}) {
    const colorPreview = {
        backgroundColor: name === "rValue" ? `rgb(${value}, 0, 0)` : name === "gValue" ? `rgb(0, ${value}, 0)` : `rgb(0, 0, ${value})`,
        width: '50px',
        height: '50px'
    }
    const pickerDiv = {
        display: "flex",
    }

    const changeColor = (event) => {
        console.log("singlePicker", name, value)
        console.log({event})
        onChange(name, value);
    }

    return (
        <div style={pickerDiv}>
            <div style={colorPreview}></div>
            <label>{`${color}: `}
                <input type="number" min="0" max="255" value={value} onClick={() => changeColor()} />
            </label>
        </div>
    )
}
