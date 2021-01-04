import React from 'react';

function CreditCard(props) {
  function month(number) {
    if (number < 10) {
      return '0' + number;
    } else return number;
  }

  function getLogo(string) {
    if (string === 'Visa') return '/img/visa.png';
    else return '/img/master-card.svg';
  }
  return (
    <div
      style={{
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`,
      }}
    >
      <img src={getLogo(props.type)} />
      <div>{props.number}</div>
      <div>
        Expires {month(props.expirationMonth)}/
        {props.expirationYear.toString().slice(2, 4)}
      </div>
      <div>{props.bank}</div>
      <div>{props.owner}</div>
    </div>
  );
}

export default CreditCard;
