import React from 'react';

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;
  const divStyle = {
    backgroundColor: bgColor,
    color: color,
  };
  const cardType =
    type === 'Visa'
      ? '/src/assets/images/visa.png'
      : '/src/assets/images/visa.png';
  return (
    <div className="cards">
      <div className="creditCard" style={divStyle}>
        <img src={cardType} typeof={type} alt={type} />
        <p>.... .... .... {number.slice(12)}</p>
        <p>
          Expires {expirationMonth}/{expirationYear}
        </p>
        <p>{bank}</p>
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
