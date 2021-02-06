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
  let cardLogo = './img/master-card.svg';
  const selectLogo = (type) => {
    if (type === 'Visa') {
      cardLogo = './img/visa.png';
    }
    return cardLogo;
  };

  const secretNum = (number) => {
    let count = 1;
    let cardNumber = number.split('');
    for (let i = 0; i <= 11; i++) {
      cardNumber[i] = '·';
      if (count === 4) {
        cardNumber[i] += ' ';
        count = 0;
      }
      count++;
    }
    return cardNumber.join('');
  };
  return (
    <div
      className="creditCard"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <img src={selectLogo(type)} alt="card logo" />
      <p className="cardNumber">{secretNum(number)}</p>
      <p>{`Expires ${expirationMonth}/${expirationYear}      ${bank}`}</p>
      <p>{owner}</p>
    </div>
  );
};

export default CreditCard;
