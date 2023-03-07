import './index.css';
import React from 'react';
import visa from '../../assets/images/visa.png';
import mastercard from '../../assets/images/mastercard.png';

const bankLogo = {
  Visa: visa,
  'Master Card': mastercard,
};

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  return (
    <div
      className="CreditCard"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <div className="CreditCard-header">
        <img src={bankLogo[type]} alt="Credit card logo" />
        <p>**** **** **** {number.slice(-4)}</p>
      </div>
      <div className="CreditCard-info">
        <div>
          <p style={{ marginRight: 20 }}>
            Expires{' '}
            {expirationMonth.toString().length === 1
              ? `0${expirationMonth}`
              : expirationMonth}
            /{expirationYear.toString().slice(-2)}
          </p>
          {bank}
        </div>
        <p>{owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
