import React from 'react';
import visaLogo from '../assets/images/visa.png'; 
import masterCardLogo from '../assets/images/master-card.svg'; 

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
  const cardTypeLogo = type === 'Visa' ? visaLogo : masterCardLogo;
  const formattedNumber = `•••• •••• •••• ${number.slice(-4)}`;
  const formattedMonth = expirationMonth.toString().padStart(2, '0');
  const formattedYear = expirationYear.toString().slice(-2);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: color,
        borderRadius: '10px',
        padding: '20px',
        width: '300px',
        height: '180px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div style={{ alignSelf: 'flex-end' }}>
        <img
          src={cardTypeLogo}
          alt={type}
          style={{ width: '60px', objectFit: 'contain' }}
        />
      </div>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        {formattedNumber}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.9rem',
        }}
      >
        <span>
          Expires {formattedMonth}/{formattedYear}
        </span>
        <span>{bank}</span>
      </div>
      <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{owner}</div>
    </div>
  );
};

export default CreditCard;