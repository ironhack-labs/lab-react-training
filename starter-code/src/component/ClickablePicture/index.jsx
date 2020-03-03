import React, { Component } from 'react';
import './style.scss';

class ClickablePicture extends Component {
	constructor() {
		super();
		this.state = {
			active: true
		};
		this.turnDown = this.turnDown.bind(this);
	}

	turnDown() {
		this.setState(previousState => ({
			active: !previousState.active
		}));
	}

	render() {
		const { img, imgClicked } = this.props;
		return (
			<div className="App">
				<button onClick={this.turnDown}>
					{(this.state.active && <img src={img} alt="image" />) || (
						<img src={imgClicked} alt="image" />
					)}
				</button>
			</div>
		);
	}
}

export default ClickablePicture;
