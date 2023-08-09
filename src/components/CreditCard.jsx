import React from 'react';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color
}) => {
  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '300px',
    height: '180px',
    margin: '10px'
  };

  const cardTypeLogo =
    type === 'Visa'
      ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/320px-Visa_Inc._logo.svg.png'
      : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/450px-Mastercard-logo.svg.png';

  const lastFourDigits = number.slice(-4);

  return (
    <div className="credit-card" style={cardStyle}>
      <div>
        <img src={cardTypeLogo} alt={type} height="30" />
      </div>
      <div>
        <p>**** **** **** {lastFourDigits}</p>
        <p>
          Expires {expirationMonth}/{expirationYear}
        </p>
        <p>{bank}</p>
      </div>
      <div>
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;