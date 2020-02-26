import React, {Component} from "react";

class ClickeablePicture extends Component {
	state = {
		isClicked: "",
	}

	handleClick = event => {
		this.setState(prevState => ({ isClicked: !prevState.isClicked }))
    }
    

	render() {
		return (
			<div className="ClickeablePicture">
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