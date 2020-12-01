import React from 'react';
import PropTypes from 'prop-types';
import './CreditCard.css';

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
  const cardStyle = { backgroundColor: bgColor, color: color };

  if (type === 'Visa') {
    return (
      <div style={cardStyle} class="credit-card">
        <div class="logo">
          <img src="./img/visa.png"></img>
        </div>
        <div class="number">{number}</div>
        <div class="details">
          <div class="expires-bank">
            <p>
              Expires {expirationMonth} / {expirationYear}
            </p>
            <p>{bank}</p>
          </div>
          <div class="name">{owner}</div>
        </div>
      </div>
    );
  }

  if (type === 'Master Card') {
    return (
      <div style={cardStyle} class="credit-card">
        <div class="first-row">
          <div class="logo">
            <img src="./img/master-card.svg"></img>
          </div>
        </div>
        <div class="number">**** **** **** {number.slice(-4)}</div>
        <div class="details">
          <div class="expires-bank">
            <p>
              Expires {expirationMonth} / {expirationYear}
            </p>
            <p>{bank}</p>
          </div>
          <div class="name">{owner}</div>
        </div>
      </div>
    );
  }
}

CreditCard.propTypes = {};

export default CreditCard;
