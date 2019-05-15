import React, { Component } from 'react';

class BoxColor extends Component {
	render() {
		let rgb = [];
		for (var i = 0; i < 3; i++) {
			let r = Math.floor(Math.random() * 256);
			rgb.push(r);
		}

		var styles = {
			margin: '20px',
			width: '250px',
			height: '250px',
			backgroundColor: `rgb(${rgb})`,
			display: 'inline-block'
		};

		let rgbText = rgb.join(', ');

		return (
			<div>
				<div className="square-box" style={styles}>
					{' '}
					rgb({rgbText})
				</div>
			</div>
		);
	}
}

export default BoxColor;
