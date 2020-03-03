import React from 'react';
import './style.scss';

const CreditCard = props => {
  /* const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = this.props; */
  let bankImg;
  let divStyle = {
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`
  };
  if (props.type === 'Visa') {
    bankImg = '/img/visa.png';
  } else {
    bankImg = '/img/master-card.svg';
  }
  return (
    <div className="credit-card" style={divStyle}>
      <img src={process.env.PUBLIC_URL + bankImg} alt={props.bank} />
      <h4>•••• •••• •••• {[props.number].splice(12, 16)}</h4>
      <p>
        Expires: {props.expirationMonth}/{props.expirationYear}
      </p>
      <p>{props.bank}</p>
      <p>{props.owner}</p>
    </div>
  );
};

export default CreditCard;
