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
  const digits = number.slice(-4);

  const cardType = {
    Visa: '/img/visa.png',
    'Master Card': '/img/master-card.svg',
  };

  const cardColor = {
    backgroundColor: bgColor,
    color,
  };

  return (
    <div style={cardColor}>
      <div>
        <img src={cardType[type]} />
      </div>

      <div>
        <p>
          {'*'.repeat(12)} {digits}
        </p>
      </div>
      <div>
        Expires: {expirationMonth > 9 ? expirationMonth : `0${expirationMonth}`}{' '}
        / {expirationYear - 2000} - {bank}
      </div>
      <div>{owner}</div>
    </div>
  );
}

export default CreditCard;
