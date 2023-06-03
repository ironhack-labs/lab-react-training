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
      <div className="creditcard-number">•••• •••• •••• {number.slice(-4)}</div>
      <div className="creditcard-details">
        <p>
          Expires: {expirationMonth}/{expirationYear}
        </p>
        <p>{bank}</p>
        <p>{owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
