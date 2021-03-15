import React from 'react';
import "./../styles/CreditCard.css";


function CreditCard(props) {
    return (
        <div id="creditCard" style={{backgroundColor:`${props.bgColor}`, color:`${props.color}`}}>

            <h3 id="cardType">{props.type}</h3>
           
            {/* <p id="cardNumber">{props.number.substring(props.number.length - 4)}</p> */}
            <p id="cardNumber">{props.number}</p>
            
            <div id="cardInfo">
                <p>{props.expirationMonth}/{props.expirationYear}</p>
                <p>{props.bank}</p>
            </div>
            <div>
                <p id="cardInfo1">{props.owner}</p>
            </div>

        </div>  
    )
}

export default CreditCard
