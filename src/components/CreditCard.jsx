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
  // Check the card type and pull the appropriate logo
  if (type === 'Visa') {
    type = './../../img/visa.png';
  } else {
    type = './../../img/master-card.svg';
  }
  return (
    <div class="creditCard" style={{ backgroundColor: bgColor }}>
      <div class="imageContainer">
        <img src={type} alt="logoCreditCard" class="cardLogo" />
      </div>
      <div class="cardCode" style={{ color: color }}>
        •••• •••• •••• {number.toString().slice(-4)}
      </div>
      <div class="cardInfo" style={{ color: color }}>
        <span class="expiryDate">
          Expires {expirationMonth} / {expirationYear}
        </span>
        <span class="bankName">{bank}</span>
      </div>
      <div class="owner" style={{ color }}>
        {owner}
      </div>
    </div>
  );
};

export default CreditCard;
