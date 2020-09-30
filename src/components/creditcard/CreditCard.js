import React from 'react';
import './creditcard.css';

function CreditCard(props) {
  const {
    bank,
    bgColor,
    color,
    expirationMonth,
    expirationYear,
    number,
    owner,
    type,
  } = props;

  let cardFlagSrc = type == 'Visa' ? './img/visa.png' : './img/master-card.svg';

  const hiddenNmbr = '•••• '.repeat(3) + number.slice(-4);

  const expMonth = expirationMonth.toString();
  const expYear = expirationYear.toString().slice(-2);

  return (
    <div
      className="the-border credit-card"
      style={{ background: bgColor, color: color }}
    >
      <img src={cardFlagSrc} alt="" />
      <h2>{hiddenNmbr}</h2>
      <div>
        <p>
          Expires: {expMonth}/{expYear}
          {' '.repeat(4)}
          {bank}
        </p>
        <p>{owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;

//•
