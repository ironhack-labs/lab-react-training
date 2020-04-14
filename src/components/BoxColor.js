import React, { Component } from 'react';

class BoxColor extends Component {

    componentToHex(c) {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      }

      rgbToHex(r, g, b) {
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
      }

    render() {
        const {r, g, b } = this.props;
        const divStyle = {
            background: `rgb(${r}, ${g}, ${b})`,
        }
        return (
            <div style ={divStyle}>
               <p>rgb ({r}, {g}, {b})</p>
               <p>{this.rgbToHex(r,g,b)}</p>
            </div>
        )
    }
}

export default BoxColor; 