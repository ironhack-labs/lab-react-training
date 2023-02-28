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
  
  const formattedNumber = `**** **** **** ${number.slice(-4)}`;
  const formattedMonth = String(expirationMonth).padStart(2, '0');
  const formattedYear = String(expirationYear).slice(-2);

  
  const cardStyles = {
    backgroundColor: bgColor,
    color: color,
    width: '220px',
    display: 'flex',
    padding: '40px',
    borderRadius: '20px',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px'

  };

  
  let cardLogo;
  if (type === 'Visa') {
    cardLogo = <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className='visa'/>;
  } else if (type === 'Master Card') {
    cardLogo = <img src="https://e7.pngegg.com/pngimages/648/903/png-clipart-mastercard-logo-logo-payment-visa-mastercard-paypal-mastercard-icon-text-service-thumbnail.png" alt="Master Card" className='masterCard' />;
  }

  return (
    <div className="credit-card" style={cardStyles}>
      <div>{cardLogo}</div>
      <div className="card-number">{formattedNumber}</div>
      <div className="card-details">
        <span className="card-expiry">{formattedMonth}/{formattedYear}</span>
        <span className="card-bank">{bank}</span>
      </div>
      <div className="card-owner">{owner}</div>
    </div>
  );
};

export default CreditCard;
