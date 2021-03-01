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
      if (type === 'Visa') {
          type = './../../img/visa.png';
      } else {
          type = './../../img/master-card.svg';
      }
    return (
        <div class="imageContainer" style={{ backgroundColor: bgColor }}>
        <div>
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