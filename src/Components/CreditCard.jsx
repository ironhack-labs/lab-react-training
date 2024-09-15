import React from 'react';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const lastFourDigits = number.slice(-4);

  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    padding: '10px',
    borderRadius: '10px',
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: '10px',
    fontSize: '18px',
  };

  const cardLogo = {
    width: '80px',
    marginBottom: '10px',
  };

  return (
    <div style={cardStyle}>
      {type === 'Visa' ? (
        <img
          style={cardLogo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
          alt="Visa"
        />
      ) : (
        <img
          style={cardLogo}
          src="https://images.ctfassets.net/q33z48p65a6w/4wLQJbPhbGw4W8IeUKEiCg/5f6a3bbbf6a74de7e73882ec45531d89/1901_N26_App_Icon.png"
          alt="Master Card"
        />
      )}
      <div style={{ marginBottom: '10px' }}>{lastFourDigits}</div>
      <div style={{ marginBottom: '10px' }}>
        Expires {expirationMonth}/{expirationYear % 100}
      </div>
      <div style={{ marginBottom: '10px' }}>{bank}</div>
      <div>{owner}</div>
    </div>
  );
};

export default CreditCard;