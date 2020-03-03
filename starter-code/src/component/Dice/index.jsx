import React, { Component, Children } from 'react';
import './style.scss';

class Dice extends Component {
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

				{/* {(isLoggedIn && <span>Welcome Logged User</span>) || <strong>User is not logged in</strong>} */}
			</div>
		);
	}
}

export default Dice;
