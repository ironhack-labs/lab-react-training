import React from 'react'
import './BoxColor.css'

export default function BoxColor(props) {


    function rgbToHex(props) {
        return "#" + ((1 << 24) + (props.r << 16) + ([props.g] << 8) + props.b).toString(16).slice(1);
      }
    return (
        <div className ='border box-color'  style={{ backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`, color: props.color}}>
            <p>rgb({props.r},{props.g},{props.b})</p>
            <p>{rgbToHex(props)}</p>
        </div>
    )
}
