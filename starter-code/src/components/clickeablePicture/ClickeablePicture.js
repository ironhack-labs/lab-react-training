import React from "react";

class ClickeablePicture extends React.Component {
	state = {
		isClicked: "",
	};

	handleClick = event => {
		this.setState(prevState => ({ isClicked: !prevState.isClicked }))
	};
	render() {
		return (
			<div>
				<img
					onClick={this.handleClick}
					src={this.state.isClicked ? this.props.imgClicked : this.props.img}
					alt="..."
					className="m-5"
				/>
			</div>
		);
	}
}

export default ClickeablePicture;
