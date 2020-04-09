import React, { Component } from "react";

class IdCard extends Component {
	render() {
		
    return(
			<div className="id-box">
			<img src={this.props.picture} alt='user'></img>
			<div className="id-info">
					<p>First name: {this.props.firstName}</p>
					<p>Last name: {this.props.lastName}</p>
					<p>Gender: {this.props.gender}</p>
					<p>Height: {this.props.height}</p>
					<p>Birthday: {this.props.birth}</p>
			</div>
	</div>
		);
	}
}

export default IdCard;
