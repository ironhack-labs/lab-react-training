import React, { Component } from "react";

class IdCard extends Component {
	dateToString = (date) => date.toDateString();
	render() {
		return (
			<div className="id-card">
				<div>
					<img src={this.props.picture} alt="" className="photo" />
				</div>
				<div className="content">
					<p><strong>First name:</strong> {this.props.firstName}</p>
					<p><strong>Last name:</strong>  {this.props.lastName}</p>
					<p><strong>Gender:</strong>  {this.props.gender}</p>
					<p><strong>Height:</strong> {this.props.height}</p>
					<p><strong>Birth:</strong> {this.dateToString(this.props.birth)}</p>
				</div>
			</div>
		)
	}
}

export default IdCard;