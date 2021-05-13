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
    color, // since color : color, we can just write color
    borderRadius: '5px',
  };

  return (
    <div style={divStyle}>
      <img
        src={type === 'Visa' ? 'img/visa.png' : 'img/master-card.svg'}
        height="50px"
      />
      <h1>
        {'•••• '.repeat(3)} {number.slice(-4)}
      </h1>
      <p>
        Expires: {expirationMonth > 9 ? expirationMonth : `0${expirationMonth}`}
        /{expirationYear.toString().substring(2, 4)}
        {bank}
      </p>
      <p>{owner}</p>
    </div>
  );
}

export default CreditCard;
