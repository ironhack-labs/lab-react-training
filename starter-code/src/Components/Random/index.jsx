import React, { Component } from 'react';
import './styles.scss';

class Random extends Component {
	render() {
		const { min, max } = this.props;
		return (
			<div>
				Random value between {min} and {max} =>={' '}
				{Math.floor(Math.random() * (max - min))};
			</div>
		);
	}
}

export default Random;
