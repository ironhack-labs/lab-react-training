import React from 'react';
import visaLogo from '../assets/img/visa.png';
import masterCardLogo from '../assets/img/master-card.svg';


function CreditCard(props) {

  function hideCardNumber(cardNumber) {
    const dotArray = [...Array(4)].map((el) => String.fromCharCode(9899));

    return (
      <p>
        <small>{[...Array(3)].map((el) => dotArray.join('')).join(' ')}</small>
        {cardNumber.substr(-4)}
      </p>
    );
  }

  function padLeft(number) {
    if (number < 10) {
      return '0' + number;
    }
    return number;
  }

  return (
    <div className='credit-card' style={{ backgroundColor: props.bgColor, color: props.color }}>
      <div className='credit-card-flag'>
        <img alt='Credit Card Flag' src={props.type === 'Visa' ? visaLogo : masterCardLogo} />
      </div>
      <div className='credit-card-number'>
        {hideCardNumber(props.number)}
      </div>
      <span>
        {` Expires ${padLeft(props.expirationMonth)}/${props.expirationYear.toString().substr(2)}`}
      </span>
      {props.bank}
      <p className='credit-card-owner'>
        {props.owner}
      </p>
    </div>
  );
}

export default CreditCard;