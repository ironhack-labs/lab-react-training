import React from 'react';
import './CreditCard.css';
import Visa from '../../images/visa.png';
import MasterCard from '../../images/mc2.png';

export default function CreditCard(props) {
  return (
    <div
      className="creditCard"
      style={{
        backgroundColor: props.bgColor,
        color: props.bgColor === '#eeeeee' ? 'black' : 'white',
      }}
    >
      <div className="cardLogoWrapper">
        <img
          className="cardLogo"
          src={props.type === 'Visa' ? Visa : MasterCard}
          alt="card"
        />
      </div>
      <h2>**** **** **** {props.number.slice(props.number.length - 4)}</h2>

      <small>
        Expires {String(props.expirationMonth).padStart(2, '0')}/
        {props.expirationYear.toString().slice(2)} - {props.bank}
      </small>
      <br />
      <small>{props.owner}</small>
    </div>
  );
}
