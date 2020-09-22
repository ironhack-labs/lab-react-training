import React from 'react';
import './CreditCard.css';

const CreditCard = (props) => {
  console.log(' credit card: ');

  const ccNumber = '.... .... .... ' + props.number.slice(12, 17);

  const expiresMonth =
    props.expirationMonth.toString().length > 1
      ? props.expirationMonth.toString() : '0' + props.expirationMonth.toString();

  const cardTypeImg =
    props.type === 'Visa' ? '/img/visa.png' : '/img/master-card.svg';

  return (
    <div
      className="credit-card"
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
      }}
    >
      <div className="c-card-img">
        <img src={cardTypeImg} alt="cardImage"/>
      </div>
      <div className="c-card-num">
        <p> {ccNumber} </p>
      </div>
      <div className="c-card-name">
        <div className="expire-sec">
          <p>
            Expires {expiresMonth}/{props.expirationYear.toString().slice(2, 4)}{' '}
            <span> {props.bank}</span>
          </p>
        </div>
        <p> {props.owner} </p>
      </div>
    </div>
  );
};

export default CreditCard;