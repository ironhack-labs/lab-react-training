import React, { Component } from 'react';

class BoxColor extends Component {

    componentRgbToHex = (c) => {
        let hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
    rgbToHex = (r, g, b) => {
        return `#${this.componentRgbToHex(r)}${this.componentRgbToHex(g)}${this.componentRgbToHex(b)} `
    }

    render() {
        const {r, g, b} = this.props

        return (
            
            <div style={{ backgroundColor:`rgb(${this.props.r},${this.props.g},${this.props.b})`}}>
                <h3>rgb({this.props.r},{this.props.r},{this.props.r})</h3>
                <h3>{this.rgbToHex(r, g, b)}</h3>            
            </div>
        );
    }
}

export default BoxColor;