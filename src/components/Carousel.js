import React, {Component} from 'react';
import './carousel.css';

class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showImg: this.props.imgs[0],
			index: 0
		};
	}

	buttonLeft = () => {
		let newIndex = this.state.index - 1;
		if (newIndex <= 0) {
			newIndex = this.props.imgs.length - 1;
		}
		this.setState({
			index: newIndex,
			showImg: this.props.imgs[newIndex]
		});
	};

	buttonRight = () => {
		let newIndex = this.state.index + 1;
		if (newIndex > this.props.imgs.length - 1) {
			newIndex = 0;
		}
		this.setState({
			index: newIndex,
			showImg: this.props.imgs[newIndex]
		});

	};


	render() {
		return (
			<div>
				<img className="carousel-img" src={this.state.showImg} alt=""/>
				<div>
					<button
						className="carousel-button"
						onClick={this.buttonLeft}>Left
					</button>
					<button
						className="carousel-button"
						onClick={this.buttonRight}>Right
					</button>
				</div>
			</div>
		);
	}
}

export default Carousel;