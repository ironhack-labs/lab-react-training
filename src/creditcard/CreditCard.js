import React from 'react';
import './CreditCard.css';

function CreditCard(props) {
  const cardColor = {
    backgroundColor: props.bgColor,
    color: props.color,
  };
  return (
    <div className="creditcard" style={cardColor}>
      <div className="card">
        <h3>{props.type}</h3>
      </div>
      <div className="number">
        <h2>{props.number}</h2>
      </div>
      <div class="expires">
        <h4>Expires {`0${props.expirationMonth}/${props.expirationYear}`}</h4>
        <h4>{props.bank}</h4>
      </div>
      <div className="owner">
        <h4>{props.owner}</h4>
      </div>
    </div>
  );
}

export default CreditCard;
