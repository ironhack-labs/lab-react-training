import React from 'react';

const App = (props) => {
  const divStyle = {
    backgroundColor: props.bgColor,
    color: props.color,
  };
  const imgSrc =
    props.type === 'Visa' ? '/img/visa.png' : '/img/master-card.svg';

  const last4Digits = props.number.substr(-4);

  return (
    <div className="CreditCard" style={divStyle}>
      <div className="type">
        <img src={imgSrc} alt={props.type} />
      </div>
      <div className="number">•••• •••• •••• {last4Digits}</div>
      <div className="expires-bank">
        <span>
          Expires {props.expirationMonth}/{props.expirationYear}
        </span>
        <span className="bank">{props.bank}</span>
      </div>
      <div className="owner">{props.owner}</div>
    </div>
  );
};

export default App;
