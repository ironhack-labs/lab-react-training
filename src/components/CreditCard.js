/* eslint-disable react/prop-types */
import imgVisa from '../assets/images/visa.png';
// import imgMaster from '../assets/images/master-card.svg'; // throws an error :(

function CreditCard( { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } ) {
	const numHideChars = number.slice( 0, -4 ).replace( /\d/g, '•' ) + number.slice( -4 );
	const numSplitIntoFour = numHideChars.match( /.{4}/g ).join( ' ' );

	const formatedExpirationYear = expirationYear.toString().slice( -2 );
	return (
		<div className="credit-card" style={{ backgroundColor: bgColor, color: color }}>
			<div className="credit-card-type">
				{ type === 'Visa' && <img src={imgVisa} alt='visa' />}
				{/* { type === 'Master Card' && <img src={imgMaster} alt='Master' />} */}
			</div>
			<div className="credit-card-number">
				<p>{numSplitIntoFour}</p>
			</div>
			<div className="credit-card-info">
				<p>Expires {expirationMonth}/{formatedExpirationYear}<span>{bank}</span></p>
				<p>{owner}</p>
			</div>
		</div>
	);
}

export default CreditCard;
