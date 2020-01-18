import React from "react";

class Carousel extends React.Component {
	state = {
		imgs: this.props,
		imgsIndex: 2,
	};

	render() {
		return (
			<div>
				<button className="btn btn-danger">Left</button>
				<img
					src={this.props.imgs[Math.floor(Math.random() * this.props.imgs.length)]}
					alt="..."
					className="m-5"
				/>
				<button className="btn btn-success">Right</button>
			</div>
		);
	}
}

export default Carousel;
