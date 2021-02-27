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
  //   console.log(type);
  return (
    <div class="creditCard">
        <div class="imageContainer">
            <img src={type} alt="logoCreditCard" class="cardLogo" />
        </div>
    </div>
  );
};

export default CreditCard;
