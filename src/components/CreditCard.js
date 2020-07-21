import React from 'react';

function CreditCard(props){
    return (
        <div className="CreditCard" style={{
          backgroundColor: props.bgColor,
          color: props.color,
        }}>
          <div className="type">
            {props.type === "Visa" && <img src="/img/visa.png" alt =""/>}
            {props.type === "Master Card" && <img src="/img/master-card.svg" alt=""/>}
          </div>
          <div className="number">•••• •••• •••• {props.number.substr(-4)}</div>
          <div className="expires-bank">
            <span>Expires {('0'+props.expirationMonth).substr(-2)}/{props.expirationYear.toString().substr(2)} </span>
            <span className="bank">{props.bank}</span>
          </div>
          <div className="owner">{props.owner}</div>
        </div>
      );
    }


export default CreditCard;