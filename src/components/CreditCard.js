import React from 'react';
import './CreditCard.css';

const CreditCard = ({
  owner,
  expirationMonth,
  expirationYear,
  bank,
  numbers,
  bgColor,
  color,
  type,
}) => {
  const retrieveLogo = (type) => {
    switch (type.toLowerCase()) {
      case 'visa':
        return '/img/visa.png';
      case 'master card':
        return '/img/master-card.svg';
      default:
        return;
    }
  };

  const retrieveNumbers = (numbers) => {
    let bullets = '';
    for (let i = 1; i < 13; i++) {
      bullets += '\u2022';
      if (i % 4 === 0) {
        bullets += ' ';
      }
    }
    numbers = (
      <div>
        <span>{bullets}</span> {numbers.slice(12)}
      </div>
    );
    return numbers;
  };

  const retrieveYear = (expirationYear) => {
    expirationYear = String(expirationYear);
    const lastIndex = expirationYear.length - 1;
    return expirationYear.length > 2
      ? expirationYear[lastIndex - 1] + expirationYear[lastIndex]
      : expirationYear;
  };

  const retrieveMonth = (expirationMonth) => {
    return expirationMonth > 9 ? expirationMonth : '0' + expirationMonth;
  };

  return (
    <div
      className="credit-card-container"
      style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
    >
      <div className="logo-container">
        <img src={retrieveLogo(type)} alt="credit-card logo" />
      </div>
      <div className="numbers-container">
        <h3>{retrieveNumbers(numbers)}</h3>
      </div>
      <div className="info-container">
        <p>
          Expires {retrieveMonth(expirationMonth)}/
          {retrieveYear(expirationYear)}
          <span>{bank}</span>
        </p>
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
