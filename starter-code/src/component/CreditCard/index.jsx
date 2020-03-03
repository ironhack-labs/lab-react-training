import React from 'react';

const CreditCard = props => {
	const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;

	let imgPath = '';
	if (type === 'Visa') {
		imgPath = '/img/visa.png';
	} else if (type === 'Master Card') {
		imgPath = '/img/master-card.svg';
	}

	const cardStyle = {
		backgroundColor: bgColor,
		color: color
	};

	return (
		<div className="CreditCard" style={cardStyle}>
			<div className="type">
				<img src={imgPath} alt="logo" />
			</div>
			<div className="number">•••• •••• •••• {number.slice(-4)}</div>
			<div className="expires-bank">
				<span>
					Expires {expirationMonth}/{expirationYear}{' '}
				</span>
				<span className="bank">{bank}</span>
			</div>
			<div className="owner">{owner}</div>
		</div>
	);
};

export default CreditCard;
