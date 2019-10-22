import React from 'react';

const CreditCard = (props) => {
  const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props
  let logoVisaOrMC;

  switch (type) {
    case "Visa": logoVisaOrMC = './img/visa.png';
      break;
    case "Master Card": logoVisaOrMC = './img/master-card.svg';
      break;
    default: logoVisaOrMC = ""
  }

  const expirationMonthTwoDigitFormat = expirationMonth.toString().length === 1 ? "0" + expirationMonth : expirationMonth

  return (
    <div className="CreditCard" style={{ backgroundColor: bgColor, color: color }}>
      <div className="logo">
        <img src={logoVisaOrMC} alt="logo-visa-or-mastercard" />
      </div>
      <div className="creditcard-number">
        <h1>**** **** ****{number.toString().slice(12)}</h1>
      </div>
      <div className="expiration bank">
        <span>Expires {expirationMonthTwoDigitFormat}/{expirationYear.toString().slice(2)}</span>
        <span className="bank">{bank}</span>
      </div>
      <div className="owner">{owner}</div>
    </div>
  )
}

export default CreditCard;