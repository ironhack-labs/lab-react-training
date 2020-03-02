import React from 'react';
import './style.scss';

const CreditCard = props => {
  const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = this.props;
  let bankImg;
  if (type == 'Visa') {
    bankImg = "{process.env.PUBLIC_URL + '/img/visa.png'}";
  } else {
    bankImg = "{process.env.PUBLIC_URL + '/img/master-card.svg}";
  }
  return (
    <div className="credit-card">
      <img src={bankImg} />
    </div>
  );
};

export default CreditCard;
