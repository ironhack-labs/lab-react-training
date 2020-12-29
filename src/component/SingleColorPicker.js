import './SingleColorPicker.css'
import React, { Component } from 'react'

function SingleColorPicker(props) {
        return (
                <div className="singlePicker">
                        <p className="singlePicker-box" style={{ backgroundColor: props.value }}></p>
                        <p className="singlePicker-color">{props.color}</p>
                        <input type="number" min="0" max="255"
                                name={props.color}
                                onChange={props.onChange}
                                className="singlePicker-input"
                                id={props.rgb === "rgb" ? "rgb" : ''}
                                defaultValue="255" />
                </div>
        )
}

export default SingleColorPicker
