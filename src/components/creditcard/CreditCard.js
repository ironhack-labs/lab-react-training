import React from 'react';

function CreditCard(props) {
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
    borderRadius: '5px',
  };

  return (
    <div style={divStyle}>
      <img
        src={type === 'Visa' ? 'img/visa.png' : 'img/master-card.svg'}
        height="50px"
      />
      <h1>•••• •••• •••• {number.substring(12, 16)}</h1>
      <p>
        Expired {expirationMonth}/{expirationYear.toString().substring(2, 4)}
        {bank}
      </p>
      <p>{owner}</p>
    </div>
  );
}

export default CreditCard;
