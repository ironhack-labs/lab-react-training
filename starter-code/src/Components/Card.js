import React, { Component } from 'react';

class Card extends Component {
	state = {
		lastName: this.props.lastName,
		firstName: this.props.firstName,
		gender: this.props.gender,
		height: this.props.height,
		birth: this.props.birth,
		picture: this.props.picture
	};

	render() {
		return (
			<div className="IdCard box">
				<img src={this.state.picture} alt="user" />
				<div className="right">
					<div className="row">
						<h4>First Name:</h4>
						<p>{this.state.firstName} </p>
					</div>
					<div className="row">
						<h4>Last Name:</h4>
						<p>{this.state.lastName}</p>
					</div>
					<div className="row">
						<h4>Gender:</h4>
						<p>{this.state.gender}</p>
					</div>
					<div className="row">
						<h4>Height:</h4>
						<p>{this.state.height}</p>
					</div>
					<div className="row">
						<h4>Birth:</h4>
						<p>{this.state.birth}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;
