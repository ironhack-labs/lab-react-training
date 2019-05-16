import React, { Component } from 'react';

class Random extends Component {
	state = {
		min: this.props.min,
		max: this.props.max
	};

	render() {
		let randomValue = this.props.min + Math.floor(Math.random() * (this.props.max - this.props.min + 1));
		return (
			<p className="box">
				{' '}
				Random value between {this.state.min} and {this.state.max} => {randomValue}
			</p>
		);
	}
}

export default Random;
