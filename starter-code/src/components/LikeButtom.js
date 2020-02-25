import React from "react"

class LikeButton extends React.Component {
	state = {
		likesNumber: 0,
		color: "",
	};

	addLike = () => {
		const clickCount = this.state.likesNumber + 1;
		const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
		this.setState({
			likesNumber: clickCount,
			color: colors[Math.floor(Math.random() * colors.length)],
		})
	}

	render() {
		return (
			<button className="btn m-5" style={{ background: this.state.color }} onClick={this.addLike}>
				{this.state.likesNumber} Likes
			</button>
		)
	}
}

export default LikeButton