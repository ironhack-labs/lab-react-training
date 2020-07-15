import React, { Component } from 'react'

export default class BoxColor extends Component {
    render() {
        function componentToHex(c) {
            let hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        }
        function rgbToHex(r, g, b) {
            let finalHex = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
            return finalHex;
        }
        let { r, g, b } = this.props
        let color = (this.props.r + this.props.g + this.props.b > 127 * 3) ? 'black' : 'white'
        return (
            <div className='box' style={{ color: color, backgroundColor: `rgb(${r},${g},${b})` }}>
                <div className='boxInfoColor'>
                    <p>rgb({r}, {g}, {b})</p>
                    <p>{rgbToHex(r, g, b)}</p>
                </div>
            </div>
        )
    }
}

