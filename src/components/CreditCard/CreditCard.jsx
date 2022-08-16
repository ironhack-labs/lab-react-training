import './CreditCard.css';
import visaImg from '../../assets/images/visa.png';
// import mastercardImg from '../../assets/images/master-card.svg';

import React from 'react';

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

  let hashedCreditCard = number.substr(-4);

  const zeroedMonth = (month) => {
    if (expirationMonth < 10) {
      return '0' + month;
    } else {
      return month;
    }
  };

  const cardColors = {
    backgroundColor: `${bgColor}`,
    color: `${color}`,
  };

  return (
    <div className="credit-card" style={cardColors}>
      {/* Calling the mastercardImg variable breaks the code */}
      {type === 'Visa' ? (
        <img src={visaImg} />
      ) : (
        <img src="https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.app/img/master-card.svg" />
      )}
      <div className="credit-card-number">
        · · · · · · · · · · · {hashedCreditCard}
      </div>
      <div className="expiration">
        Expires {zeroedMonth(expirationMonth)}/{expirationYear}
      </div>
      <div className="bank">{bank}</div>
      <div className="owner">{owner}</div>
    </div>
  );
}

export default CreditCard;
