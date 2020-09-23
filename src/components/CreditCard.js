import React from 'react';

export default function CreditCard(props) {
  console.log(props);
  let creditCardNumber = '•••• •••• ••••' + props.number.slice(-4);
  let month =
    props.expirationMonth.toString().length === 1
      ? '0' + props.expirationMonth
      : props.expirationMonth;
  const divStyleCredit = {
    'background-color': props.bgColor,
    color: props.color,
  };
  return (
    <div className="credit-card" style={divStyleCredit}>
      <p>{props.type}</p>
      <p id="creditNum">{creditCardNumber}</p>
      <div className="credit-card-text">
        <p className="creditCardPtag">
          Expires {month}\{props.expirationYear.toString().slice(-2)}{' '}
          {props.bank}
        </p>
        <p className="creditCardPtag">{props.owner}</p>
      </div>
    </div>
  );
}
