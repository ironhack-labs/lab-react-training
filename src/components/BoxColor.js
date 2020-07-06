import React from 'react';

export default function BoxColor(props) {
    const style = {
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
        flexDirection: 'column'
    }
    const toHex = (color) => {
        let hex = Number(color).toString(16);
        if (hex.length < 2) {
            hex = "0" + hex
        }
        return hex;
    }
    return (
        <div style={style}>
            <h3>rgb({props.r},{props.g},{props.b})</h3>
            <p>hex = #{toHex(props.r)}{toHex(props.g)}{toHex(props.b)}</p>
        </div>
    )
}