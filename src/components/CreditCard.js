import React from 'react';
import './CreditCard.css';


const CreditCard = props => {

	const cardImage = (type) => {
		let image = '';
		switch (type) {
			case 'Visa':
				image = '/img/visa.png';
				break;
			case 'Master Card':
				image = '/img/master-card.svg';
				break;
			default:
				break;
		}
		return image;
	};


	const cardNumber = number => {
		let cardnumber = [...props.number].map((num, index) => {
			if (index <= 11) {
				return '•';
			}
			if (index > 11) {
				return num;
			}
		});
		cardnumber.splice(4, 0, ' ');
		cardnumber.splice(9, 0, ' ');
		cardnumber.splice(14, 0, ' ');
		return cardnumber;
	};

	return (
		<div>
			<div className="credit-card"
				 style={{
					 backgroundColor: props.bgColor,
					 color: props.color
				 }}>
				<div>
					<img src={cardImage(props.type)} alt=""/>
				</div>
				<div>
					<p className="number">{cardNumber(props.number)}</p>
				</div>
				<div>
					<p className="bank">Expires {props.expirationMonth}/{props.expirationYear}
						<span>{props.bank}</span></p>
				</div>
				<div>
					<p className="owner">{props.owner}</p>
				</div>
			</div>
		</div>
	);

};

export {CreditCard};