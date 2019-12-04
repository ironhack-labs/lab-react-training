import React from "react";

const BoxColor = (props) => {

	let rgbToHex = function (rgb) { 
		let hex = Number(rgb).toString(16);
		if (hex.length < 2) {
				 hex = "0" + hex;
		}
		return hex;
	};

	return (
		<div className="colors" style={{
			backgroundColor : `rgb(${props.r}, ${props.g}, ${props.b})`
		}}>
		
		<p>rgb (<span>{props.r}</span>, <span>{props.g}</span>, <span>{props.b}</span> )</p>
		
		# {rgbToHex(`${props.r}${props.g}${props.b}`)}
		</div>
		)
};


export default BoxColor;