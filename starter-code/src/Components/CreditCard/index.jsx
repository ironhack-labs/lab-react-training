import React, { Component } from 'react';
import './styles.scss';

class CreditCard extends Component {
	render() {
		const {
			number,
			expirationMonth,
			expirationYear,
			bank,
			owner,
			bgColor,
			color
		} = this.props;

		// const picture = <img src="./visa.png" alt="" />;

		return (
			<div
				className="CreditCard"
				style={{
					backgroundColor: `${bgColor}`,
					color: `${color}`
				}}
			>
				{/* <div className="pictureBank">{picture}</div> */}

				<h3 className="bankH3"> {number}</h3>

				<h2 className="bankH2">
					<p>
						Expires {expirationMonth} / {expirationYear}{' '}
					</p>
					<p>{bank}</p>

					<p>{owner}</p>
				</h2>
			</div>
		);
	}
}

export default CreditCard;
