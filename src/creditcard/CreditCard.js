import React from 'react';
// type: A string that can be "Visa" or "Master Card"
// number: A string that is a number of the credit card. You will only display the 4 last digits for security reasons 😉
// expirationMonth: A number that represents the month, between 1 and 12
// expirationYear: A number that represents the year
// bank: A string that represents the name of the bank
// owner: A string that represents the name of the owner
// bgColor: A string for the background color of the card
// color: A string for the text color of the card

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
  let style = {
    backgroundColor: bgColor,
    color: color,
  };

  const cardNumber = number.slice(12);
  return (
    <div style={style}>
      <p>{type}</p>
      <p>**** **** **** {cardNumber}</p>
      <p>
        {expirationMonth}/{expirationYear}
      </p>
      <p>{bank}</p>
      <p>{owner}</p>
      <p>{bgColor}</p>
      <p>{color}</p>
    </div>
  );
};

export default CreditCard;
