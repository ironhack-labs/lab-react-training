function CreditCard(props) {
	const {
		type,
		number,
		expirationMonth,
		expirationYear,
		bank,
		owner,
		bgColor,
		color,
	} = props;

	const divStyle = {
		backgroundColor: bgColor,
		color,
	};

	const formattedMonth =
		expirationMonth < 10 ? `0${expirationMonth}` : expirationMonth;

	const maskedNumbers = `···· ···· ···· ${number.slice(-4)}`;

	return (
		<div className='creditCard' style={divStyle}>
			<p>{type}</p>
			<p>{maskedNumbers}</p>
			<p>
				{formattedMonth}/{expirationYear}
			</p>
			<p>{bank}</p>
			<p>{owner}</p>
		</div>
	);
}

export default CreditCard;
