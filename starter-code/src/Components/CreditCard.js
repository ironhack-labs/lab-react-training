import React, { Component } from 'react';

class CreditCard extends Component {
	state = {
		type: this.props.type,
		number: this.props.number,
		expirationMonth: this.props.expirationMonth,
		expirationYear: this.props.expirationYear,
		bank: this.props.bank,
		owner: this.props.owner,
		bgColor: this.props.bgColor,
		color: this.props.color
	};

	render() {
		let styles = {
			backgroundColor: this.props.bgColor,
			color: this.props.color,
			width: 300,
			borderRadius: 8,
			padding: 10,
			margin: 10
		};

		return (
			<div className="type" style={styles}>
				{this.state.type === 'Visa' && (
					<img className="right" src="/img/visa.png" alt="visa" height="20" width="30" />
				)}
				{this.state.type === 'Master Card' && (
					<img className="right" src="/img/master-card.svg" alt="master" height="20" width="30" />
				)}
				<br />
				<br />
				<br />
				<h3>•••• •••• •••• {this.props.number.substr(-4)}</h3>
				<p>
					{this.state.expirationMonth}/{this.state.expirationYear}
				</p>
				<p>{this.state.bank}</p>
				<p>{this.state.owner}</p>
			</div>
		);
	}
}

export default CreditCard;
