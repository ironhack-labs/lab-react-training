import React from 'react';
import './CreditCard.css';

const CreditCard = props => {

  // Background color
  let bgColor = props.bgColor;

  // // Text color
  let textColor = props.color;
  
  // Creditcard image
  let image = props.type;
  props.type === 'Visa' ? image = '/img/visa.png' : image = '/img/master-card.svg';

  // Expiration info
  let expMonth = (props.expirationMonth < 10) ? '0' + props.expirationMonth : props.expirationMonth;

  let expYear = props.expirationYear % 100;
  const expMessage = `Expires ${expMonth}/${expYear}`;

  // Creditcard number
  const number = props.number.slice(12, 16);
  const numberOutput = `**** **** **** ${number}`;

  return (
    <article className='creditcard__box' style={{ backgroundColor: bgColor, color: textColor }}>
      <div className='creditcard__type'>
        <img className='creditcard__img' src={image} alt='{props.type}'/>
      </div>
      <div className="creditcard__number">
        <h2>{numberOutput}</h2>
      </div>
      <div className="creditcard__info">
        <div className="creditcard__info--line">
          <p className='creditcard__info--exp'>{expMessage}</p>
          <p className='creditcard__info--bank'>{props.bank}</p>
        </div>
        <p className='creditcard__info--name'>{props.owner}</p>
      </div>
    </article>  
  )
}

export default CreditCard;