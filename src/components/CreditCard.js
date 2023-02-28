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
  return (
    <div style={{ backgroundColor: bgColor, color: color }}>
      {type === 'Visa' && (
        <img
          src="https://logosmarcas.net/wp-content/uploads/2020/04/Visa-Emblema.png"
          alt="Visa"
        />
      )}
      {type === 'Master Card' && (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
          alt="Master Card"
        />
      )}

      <h2>{number}</h2>

      <p>
        {expirationMonth}/{expirationYear} {bank}
      </p>
      <p>{owner}</p>
    </div>
  );
}

export default CreditCard;
