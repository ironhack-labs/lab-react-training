import React, { Component } from 'react';
import './style.scss';

let colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

class LikeButton extends Component {
	constructor() {
		super();
		this.state = {
			numberOfLikes: 0,
			color: colors[0]
		};
		this.addLike = this.addLike.bind(this);
	}

	addLike() {
		let newNumber = this.state.numberOfLikes + 1;
		this.setState({
			numberOfLikes: newNumber,
			color: colors[newNumber % colors.length]
		});
	}

	render() {
		const style = {
			backgroundColor: this.state.color,
			color: 'white',
			padding: '1vh 1vw'
		};
		return (
			<div className="LikeButton">
				<button style={style} onClick={this.addLike}>
					Like {this.state.numberOfLikes}
				</button>
			</div>
		);
	}
}

export default LikeButton;
