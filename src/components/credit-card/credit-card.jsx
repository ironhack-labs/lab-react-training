import "./credit-card.css"

const VISA_IMG = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1920px-Visa_Inc._logo.svg.png"
const MASTER_IMG = "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"


function CreditCard({
	type,
	number,
	expirationMonth,
	expirationYear,
	bank,
	owner,
	bgColor,
	color }) {
	return (
		<div className="col-sm">
			<div className="credit-card" style={{ backgroundColor: bgColor, color: color }}>
				<img className="credit-card-logo"
					src={type === "Visa" ? VISA_IMG : MASTER_IMG} alt="visa" />
				<p className="credit-card-num">**** **** {number.toString().slice(-4)}</p>
				<p className="credit-card-expire">Expires: {expirationMonth}/{expirationYear.toString().slice(-2)}{"    "}{bank}</p>
				<p className="credit-card-name">Name: {owner}</p>
			</div>
		</div>
	);
}

export default CreditCard;

