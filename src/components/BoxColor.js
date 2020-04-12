import React, { Component } from 'react';
import './BoxColor.css';

let rgbToHex = (rgb) => { 
    let hex = Number(rgb).toString(16);

    if (hex.length < 2) {
            hex = `0${hex}`;
    }

    return hex;
};

let fullColorHex = (r,g,b) => {   
    let red = rgbToHex(r);
    let green = rgbToHex(g);
    let blue = rgbToHex(b);

    return `#${red}${green}${blue}`;
};

let getContrast = function (hexcolor){

	// If a leading # is provided, remove it
	if (hexcolor.slice(0, 1) === '#') {
		hexcolor = hexcolor.slice(1);
	}

	// If a three-character hexcode, make six-character
	if (hexcolor.length === 3) {
		hexcolor = hexcolor.split('').map(function (hex) {
			return hex + hex;
		}).join('');
	}

	// Convert to RGB value
	let r = parseInt(hexcolor.substr(0,2),16);
	let g = parseInt(hexcolor.substr(2,2),16);
	let b = parseInt(hexcolor.substr(4,2),16);

	// Get YIQ ratio
	let yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

	// Check contrast
	return (yiq >= 128) ? 'black' : 'white';

};

class BoxColor extends Component {
    render() {
        const divStyle = {
            backgroundColor: `rgb(${this.props.r},${this.props.g},${this.props.b})`,
        };

        const hex = fullColorHex(this.props.r, this.props.g, this.props.b);

        const divStyleP = {
            color: getContrast(hex),
        };

        return (
            <div style={divStyle} className='container boxcolor-container'>
                <p style={divStyleP} className='boxcolor-p'>rgb({this.props.r},{this.props.g},{this.props.b})</p>
                <p style={divStyleP} className='boxcolor-p'>{hex}</p>
            </div>
        );
    }
}

export default BoxColor;