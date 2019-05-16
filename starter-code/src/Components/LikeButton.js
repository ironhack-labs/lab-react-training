import React, { Component } from 'react';

class LikeButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nbOfLikes: 0
		};
		this.colors = [ 'purple', 'blue', 'green', 'yellow', 'orange', 'red' ];
		this.liked = this.liked.bind(this);
	}

	liked() {
		this.setState((prevState) => ({
			nbOfLikes: prevState.nbOfLikes + 1
		}));
	}

	render() {
		let colorIndex = this.state.nbOfLikes % this.colors.length;

		return (
			<div className="LikeButton">
				<button 
					onClick={this.liked}
					style={{
						backgroundColor: this.colors[colorIndex],
                        color: 'white',
                        borderRadius: 5,
                        fontSize: 20,
                        width: 150,
                        marginTop: 10
					}}
				>
					{' '}
					{this.state.nbOfLikes} Like{this.state.nbOfLikes !== 1 && 's'}
				</button>
			</div>
		);
	}
}

export default LikeButton;
