import React from 'react';
import './LikeButton.css';

class LikeButton extends React.Component {

	state = {
		likes: 0,
		color: ''
	};

	countClicks = () => {
		let click = this.state.likes += 1;
		const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
		const colorNumber = Math.floor(Math.random() * (colors.length - 0 + 1)) + 0;

		this.setState({
			likes: click,
			color: colors[colorNumber]
		});
	};

	render() {
		const bgColor = this.state.color || 'red';
		return (
			<div>
				<button onClick={this.countClicks}
						style={{backgroundColor: bgColor}}>{this.state.likes} Likes
				</button>
			</div>
		);
	}
}

export default LikeButton;