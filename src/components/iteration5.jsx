import React from "react";

//ITERATION 5
function CreditCard(props) {
    return (
      <div
        className="cardShape"
        style={{ backgroundColor: `${props.bgColor}`, color: `${props.color}` }}
      >
        <img src={props.type} alt="visa logo" className="logo-visa" />
  
        <h2 className="numberCard">
          
          .... .... .... {props.number.split('').slice(12)}
        </h2>
        <div className="card-bottom">
          <p>
            Expires {props.expirationMonth}/{props.expirationYear}{' '}
            <span className="bank">{props.bank}</span>
            <br />
            {props.owner}
          </p>
        </div>
      </div>
    );
  }
  
export default CreditCard;