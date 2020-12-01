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
  const styleCard = {
    backgroundColor: bgColor,
    color: color,
  };

  const cardLogo = type === 'Visa' ? '/img/visa.png' : '/img/master-card.svg';
  const cardNum = number.replace(/\d(?=\d{4})/g, '●');
  const cardMonth =
    expirationMonth.length === 1 ? '0' + expirationMonth : expirationMonth;
  const cardYear = expirationYear.toString().slice(-2);
  return (
    <div style={styleCard}>
      <img src={cardLogo} alt="Card Logo"></img>
      <p>{cardNum}</p>
      <p>
        Expires {cardMonth}/{cardYear}
      </p>
      <p>{bank}</p>
      <p>{owner}</p>
    </div>
  );
}

export default CreditCard;
