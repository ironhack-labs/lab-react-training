import React from 'react';

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
    const image = type === "Visa" ? "../visa.png " : "../master-card.svg"
    const lastDigits = number.substr(-4,4)
    const notNumbers = "**** **** ****"

  return (
    <div>
      <img style = {{width: 64 , height: 30}} src={image} atl="Visa o mastercard"/>
      <p>{`${notNumbers} ${lastDigits}`}</p>
      <p>{expirationMonth}</p>
      <p>{expirationYear}</p>
      <p>{bank}</p>
      <p>{owner}</p>
      <p>{bgColor}</p>
      <p>{color}</p>
    </div>
  );
}

export default CreditCard;
