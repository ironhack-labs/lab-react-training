import React from 'react';
import visaImg from 'visa.png'

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
    <div
      className="CreditCard"
      style={{
        backgroundColor: bgColor,
        color: color,
      }}
    >
      <div className="type">
        {type === 'Visa' && <img src={visaImg} alt='visa'/>}
        {type === 'Master Card' && (
          <img src="/img/master-card.svg" alt='../../public/master-card.svg' />
        )}
      </div>
      <div className="number">
        •••• •••• •••• {number.substring(number.length -4)}
      </div>
      <div className="expires-bank">
        <span>
          Expires {('0' + expirationMonth)}/
          {expirationYear.toString().substring(2)}{' '}
        </span>
        <span className="bank">{bank}</span>
      </div>
      <div className="owner">{owner}</div>
    </div>
  );
}

export default CreditCard;

/*
import React, { Component } from 'react';

// Definition of the component CreditCard
class CreditCard extends Component {
  render() {
    return (
      <div className="CreditCard" style={{
        backgroundColor: bgColor,
        color: color,
      }}>
        <div className="type">
          {type === "Visa" && <img src="/img/visa.png" />}
          {type === "Master Card" && <img src="/img/master-card.svg" />}
        </div>
        <div className="number">•••• •••• •••• {number.substring(-4)}</div>
        <div className="expires-bank">
          <span>Expires {('0'+expirationMonth).substring(-2)}/{expirationYear.toString().substring(2)} </span>
          <span className="bank">{bank}</span>
        </div>
        <div className="owner">{owner}</div>
      </div>
    );
  }
}

export default CreditCard;
*/
