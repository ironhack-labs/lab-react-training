import React, { Component } from 'react';

class IdCard extends Component {
	render() {
		const { firstName, lastName, gender, height, birth, picture } = this.props;
		return (
			<div>
				<div>{picture}</div>
				<p>
					First Name: {firstName} <br />
					Last Name: {lastName} <br />
					Gender: {gender} <br />
					Height: {height} <br />
					Birth: {birth}
				</p>
			</div>
		);
	}
}

export default IdCard;
