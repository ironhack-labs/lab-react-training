import React from 'react';
import { ReactComponent as Visa } from '../assets/img/visa.svg';
import { ReactComponent as Master } from '../assets/img/mastercard.svg';

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
	return (
		<div className='CreditCard' style={{ backgroundColor: bgColor, color: color }}>
			<div className='CreditCard-logo'>{type === 'Visa' ? <Visa /> : type === 'master' && <Master />}</div>
			<div className='CreditCard-name'>
				<p>{number}</p>
			</div>
			<div>
				<div className='CreditCard-expire'>
					<p>
						Expires {expirationMonth}/{expirationYear} {bank}
					</p>
				</div>
				<div>
					<p>{owner}</p>
				</div>
			</div>
		</div>
	);
};

export default CreditCard;
