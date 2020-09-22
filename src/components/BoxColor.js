import React, { Component } from 'react'

export default class BoxColor extends Component {
    
    render() {
        function componentToHex(c) {
            let hex = c.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
          }
          function rgbToHex(r, g, b) {
            return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
          }
         
        const color = {
            backgroundColor: `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`,
            color: this.props.font,
            height: "150px"
        }
        return (
            <div style={{ width:"100%" }} className="coloured">
                <div style={color}>
                    rgb({this.props.r},{this.props.g},{this.props.b}) <br />
                    {rgbToHex(this.props.r,this.props.g,this.props.b)}
                </div>
            </div>
        )
    }
}
