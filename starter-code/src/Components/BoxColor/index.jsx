import React, { Component } from 'react';
import './styles.scss';

class BoxColor extends Component {
	render() {
		const { r, g, b } = this.props;
		console.log(this.props);

		return (
			<div class="Box" style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
				<p class="rgbCenter">
					rgb({r},{g},{b})
				</p>
			</div>
		);
	}
}

export default BoxColor;
