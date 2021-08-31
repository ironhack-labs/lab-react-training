import React, { Component } from 'react';

class BoxColor extends Component {
    constructor(props) {
        super(props);
    
      }




    // const divStyle = {
    //     color: this.rgbToHex(this.fullColorHex(props.r, props.g, props.b)),
    //     width: 200,
    // };

    rgbToHex(rgb) { 
        var hex = Number(rgb).toString(16);
        if (hex.length < 2) {
             hex = "0" + hex;
        }
        return hex;
      };

    fullColorHex (r,g,b) {   
        var red = this.rgbToHex(r);
        var green = this.rgbToHex(g);
        var blue = this.rgbToHex(b);
        return red+green+blue;
      };


    

    render() {

        const divStyle = {
            backgroundColor: '#'+ `${this.fullColorHex(this.props.r, this.props.g, this.props.b)}`,
            width: 200,
            height: 40
        };

        return (
            // <div style={{ color: this.rgbToHex(this.fullColorHex(this.props.r, this.props.g, this.props.b)}}>
                
            // </div>
            <div style={divStyle}>
            <p>rgb({this.props.r}, {this.props.g}, {this.props.b})</p>
            <p>#{this.fullColorHex(this.props.r, this.props.g, this.props.b)}</p>

            </div>
        );
    }
}

export default BoxColor;