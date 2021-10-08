import React from 'react';

export default function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const cardNumber = (replace) => {
    return (
      '*'.repeat(4) +
      ' ' +
      '*'.repeat(4) +
      ' ' +
      '*'.repeat(4) +
      ' ' +
      replace.substring(12)
    );
    // return `**** **** **** ${replace.substring(12)}`;
  };

  return (
    <div>
      <img
        src={type === 'Visa' ? 'img/visa.png' : 'img/  master-card.svg'}
        alt="card type"
      />
      <div>{cardNumber(number)}</div>
      <div>
        <span>
          Expires{' '}
          {`${
            String(expirationMonth).length === 1
              ? `0${expirationMonth}`
              : expirationMonth
          }/${expirationYear.toString().substring(2)}`}
        </span>
        <span>{bank}</span>
      </div>
      <div>{owner}</div>
    </div>
  );
}
