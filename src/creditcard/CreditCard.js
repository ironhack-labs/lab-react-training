import React from 'react';
import './CreditCard.css';

function CreditCard(props) {
  const blueStyle = {
    backgroundColor: '#11aa99',
    color: 'white',
  };

  const whiteStyle = {
    backgroundColor: '#eeeeee',
    color: '#222222',
  };

  const goldStyle = {
    backgroundColor: '#ddbb55',
    color: 'white',
  };

  if (props.bgColor === '#11aa99') {
    return (
      <div style={blueStyle} class="creditCard">
        <div class="type">
          <h4>{props.type}</h4>
        </div>
        <div class="number">{props.number}</div>
        <div class="info">
          <div>
            <h5>
              Expires {props.expirationMonth}/{props.expirationYear}
            </h5>
            <h4>{props.owner}</h4>
          </div>
          <h5>{props.bank}</h5>
        </div>
      </div>
    );
  }

  if (props.bgColor === '#eeeeee') {
    return (
      <div style={whiteStyle} class="creditCard">
        <div class="type">
          <h4>{props.type}</h4>
        </div>
        <div class="number">{props.number}</div>
        <div class="info">
          <div>
            <h5>
              Expires {props.expirationMonth}/{props.expirationYear}
            </h5>
            <h4>{props.owner}</h4>
          </div>
          <h5>{props.bank}</h5>
        </div>
      </div>
    );
  }

  if (props.bgColor === '#ddbb55') {
    return (
      <div style={goldStyle} class="creditCard">
        <div class="type">
          <h4>{props.type}</h4>
        </div>
        <div class="number">{props.number}</div>
        <div class="info">
          <div>
            <h5>
              Expires {props.expirationMonth}/{props.expirationYear}
            </h5>
            <h4>{props.owner}</h4>
          </div>
          <h5>{props.bank}</h5>
        </div>
      </div>
    );
  }
}

export default CreditCard;
