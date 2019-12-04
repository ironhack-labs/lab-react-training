import React from 'react';


function CreditCard(props) {
    let bankNumber = props.number;
    let newBankNumber = bankNumber.substr(-4);
    let yearNumber = props.expirationYear.toString();
    let newYearNumber = yearNumber.substr(-2);
    let styles = {
        color: props.color,
        backgroundColor: props.bgColor,
      };
    return (
      <div className="CreditCard" style={styles}>
        <div className="type">
          <img src= {props.cardimage} alt={props.type} />
        </div>
        <div className="cardnumberbox">
          <h2>•••• •••• •••• {newBankNumber}</h2>
        </div>
        <div className="contentbox">
          <h3><span>Expires {props.expirationMonth}/{newYearNumber}</span><span className="bankalign">{props.bank}</span></h3>
          <h3>{props.owner}</h3>
        </div>
      </div>
    )
}

export default CreditCard;
