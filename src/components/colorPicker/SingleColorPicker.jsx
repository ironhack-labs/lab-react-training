import React from 'react'

export default function SingleColorPicker(props) {
    return (
        <div className="flex-row">
            <div className="rgb-box" style={props.bgColor}></div>
            <input type="number" name={props.name} value={props.value} onChange={props.changeFn} min="0" max="0"/>
        </div>
    )
}
