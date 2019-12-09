import React from 'react';

function CreditCard (props){
  const cardFlag = {
    Visa: "./img/visa.png",
    "Master Card": "./img/master-card.svg"
  };
    return(
  <>
     <div  className="creditcard">
        <div className="cardFlag">
           <img src={cardFlag[props.type.toString()]} alt="card flag" />
        </div>
           <h4>•••• •••• •••• {props.number.slice(12)}</h4>
         <div>
           <p>Expires {props.expirationMonth}/{props.expirationYear.toString().slice(2)} {props.bank}</p>
           <p>{props.owner}</p>
         </div>
     </div>
  </>
    )
}

export default CreditCard;