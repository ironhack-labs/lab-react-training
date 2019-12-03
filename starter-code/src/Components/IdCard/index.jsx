import React, { Component } from 'react';
import './styles.scss';

class IdCard extends Component {
	render() {
		return (
			<div className="IdCard">
				<div className="profPhoto">
					<img className="Image" src={this.props.picture} alt="" />
				</div>

				<div className="IdInfo">
					<h3> First Name: {this.props.firstName}</h3>
					<h3> Last Name: {this.props.lastName}</h3>
					<h3> Gender: {this.props.gender}</h3>
					<h3> Height {this.props.height / 100}m</h3>
					<h3> Birth: {this.props.birth.toString()}</h3>
				</div>
			</div>
		);
	}
}

export default IdCard;
