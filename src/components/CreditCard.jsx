import React from 'react';
import '../App.css';
import Visa from '../images/png-transparent-logo-visa-credit-card-business-visa-text-trademark-payment-removebg-preview.png';
import MasterCard from '../images/png-transparent-mastercard-logo-moneylive-mobile-payment-brand-mastercard-text-orange-logo-removebg-preview.png';
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
      className="creditcard"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <img src={type === 'Visa' ? Visa : MasterCard} alt={type} />
      <div className="creditcard-number">
        <span style={{ fontSize: 30 }}>••••</span>
        <span style={{ fontSize: 30 }}>••••</span>
        <span style={{ fontSize: 30 }}>••••</span>
        <span style={{ fontSize: 25 }}>{number.slice(-4)}</span>
      </div>

      <div className="creditcard-details">
        <p style={{ textAlign: 'left' }}>
          Expires: {expirationMonth}/{expirationYear} {bank}
        </p>

        <p style={{ textAlign: 'left' }}>{owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
