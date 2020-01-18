import React from "react";
import "../credit-cards/CreditCards.css";

const CreditCard = ({
	type,
	number,
	expirationMonth,
	expirationYear,
	bank,
	owner,
	bgColor,
	color,
}) => {
	const creditCardNumber = "•••• •••• •••• " + number.slice(-4);
	return (
		<div
			className="credit-cards mt-3 container"
			style={{ backgroundColor: bgColor, color: color }}
		>
			<div className="align-self-end">
				<img
					src={type === "Visa" ? "img/visa.png" : "img/master-card.svg"}
					alt="..."
					className="card-logo"
				></img>
			</div>
			<div className="align-self-start">
				<h1>{creditCardNumber}</h1>
				<p>
					Expires {expirationMonth}/{expirationYear} {bank}
				</p>
				<p>{owner}</p>
			</div>
		</div>
	);
};

export default CreditCard;
