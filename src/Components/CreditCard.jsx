import React from 'react'
import "./../styles/CreditCard.css"
function CreditCard(props) {

    const hashNumber = "•••• •••• •••• " + props.number.slice(12);
    
    return (
        <div class="creditCard" style={
            {backgroundColor: props.bgColor,
            color: props.bgColor === "#eeeeee" ? "black" : "white" }
        }>
            <img src= {props.type === "Visa" ? "/img/visa.png" : "/img/master-card.svg"}  alt="bank icon" />
            <h1>{hashNumber}</h1>
            <div>
                <p>Expires {props.expirationMonth}/{props.expirationYear.toString().slice(2)}  {props.bank}</p>
                <p>{props.owner}</p>
            </div>
        </div>
    )
}

export default CreditCard
