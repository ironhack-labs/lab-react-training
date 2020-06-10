import React from 'react';
import './CreditCard.css';

function CreditCard (props) {
    let imageUrl;
    switch (props.type) {
      case 'Visa':
        imageUrl =
          'https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.app/img/visa.png';
        break;
      case 'Master Card':
        imageUrl =
          'https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.app/img/master-card.svg';
        break;
      default:
        imageUrl = '';
    }
  
    let expirationMonth = String(props.expirationMonth);
    if (expirationMonth.length < 2) {
       expirationMonth = '0' + props.expirationMonth
    }
  
    let expirationYear = String(props.expirationYear).slice(-2);
  
    const cardNumber = props.number.slice(-4)
  
  
    const style = {
      backgroundColor: props.bgColor,
      color: props.color,
    };
    return (
      <div className="creditCard" style={style}>
          <p className="type">
        <img src={imageUrl} alt="" />
          </p>
            <p className="number">•••• •••• •••• {cardNumber}</p>
        <p>
          Expires {expirationMonth}/{expirationYear}
          <span> {props.bank}</span>
        </p>
    <p>{props.owner}</p>
      </div>
    );  
}

export default CreditCard;