import React from "react";
import 'bulma/css/bulma.css';
import './../index.css';

function CreditCard(props){
    const divStyle = {
        color: `${props.color}`,
        backgroundColor:`${props.bgColor}`
    };

    const replaceCharacter = (numCard)=>{    
      const strArray= numCard.split('').map((e , index )=>{
        if (index < numCard.length -3){
            return( e = '*')
        }else{
            return e
        }
      })
      return strArray.join('')

    }

    return(
        <div className="column is-4">
            <div className="creditCard" type={props.type} style={divStyle}>
            <img src= {`${props.type ==='Visa' ? '/img/visa.png' : ''}
            ${props.type ==='Master Card' ? '/img/master-card.svg' : ''}
            `} alt="" className="logo"/>

            <p className="numCreditCard">{replaceCharacter(props.number)}</p>
            <p>Expires: {props.expirationMonth}/{props.expirationYear} </p>

            <p>{props.owner}</p>
            <p>Bank: {props.bank}</p>
            
            
            </div>            
        </div>

    )
}

export default CreditCard;
