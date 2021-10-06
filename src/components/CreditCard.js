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
  function cardHide(card) {
    let hideNum = [];
    for (let i = 0; i < card.length; i++) {
      if (i < card.length - 4) {
        hideNum.push('*');
      } else {
        hideNum.push(card[i]);
      }
    }
    return hideNum.join('');
  }

  let numeroEscondido = cardHide(number);

  const divStyle = {
    backgroundColor: `${bgColor}`,
    color: `${color}`,
  };
  return (
    <div>
      <div style={divStyle}>
        <p>{type}</p>
        <p>{numeroEscondido}</p>
        <p>
          {' '}
          Expire {expirationMonth.toString()}/{expirationYear.toString()}
        </p>
        <p>{bank}</p>
        <p>{owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
