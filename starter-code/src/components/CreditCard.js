import React from "react";
import 'bulma/css/bulma.css';
import './../index.css';

function CreditCard(props){
    const divStyle = {
        color: `${props.color}`,
        backgroundColor:`${props.bgColor}`
      };
      
    return(
        <div className="column is-4">
            <div className="creditCard" type={props.type} style={divStyle}>
            <img src= {`${props.type ==='Visa' ? '/img/visa.png' : ''}
            ${props.type ==='Master Card' ? '/img/master-card.svg' : ''}
            `} alt="" className="logo"/>

            <p className="numCreditCard">{props.number}</p>
            <p>Expires: {props.expirationMonth}/{props.expirationYear} </p>

            <p>{props.owner}</p>
            <p>Bank: {props.bank}</p>
            
            
            </div>            
        </div>

    )
}

export default CreditCard;
