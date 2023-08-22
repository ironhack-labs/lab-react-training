import React from 'react';

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color
  } = props;

  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    width: '300px',
    borderRadius: '10px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'
  };

  const cardTypeImg = type === 'Visa' ? '/img/visa.png' : '/img/master-card.svg';

  const lastFourDigits = number.substr(number.length - 4);

  return (
    <div className="credit-card" style={cardStyle}>
      <img src={cardTypeImg} alt={type} style={{ width: '50px' }} />
      <div>{lastFourDigits}</div>
      <div>
        Expires {expirationMonth}/{expirationYear}
      </div>
      <div>{bank}</div>
      <div>{owner}</div>
    </div>
  );
};

export default CreditCard;
