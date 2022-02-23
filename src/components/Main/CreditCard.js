// ./components/Main/CreditCard.js
import React from 'react'

export default function CreditCard(props) {
    console.log("props:",props)

    let cardLogo = "";

    switch(props.creditCardInfo.type){
        case "Master Card": cardLogo = "src/assets/images/master-card.svg"
        break;
        case "Visa": cardLogo = "src/assets/images/visa.png"
        break;
        default:
        break;
    }

    console.log(cardLogo)

    let lastDigits = props.creditCardInfo.number.split("").splice(12,4).join("")
    console.log(lastDigits)

    const divStyle = {
        backgroundColor: props.creditCardInfo.bgColor,
      };

  return (
        <div className='creditCard' style={divStyle}>
            <img src={cardLogo} alt="cardLogo"/>
            <p>&bull; &bull; &bull; &bull;  &bull; &bull; &bull; &bull;  &bull; &bull; &bull; &bull;  {lastDigits}</p>
            <span>Expires: {props.creditCardInfo.expirationMonth}/{props.creditCardInfo.expirationMonth}</span>
            <span> {props.creditCardInfo.bank}</span>
            <p>{props.creditCardInfo.owner}</p>
        </div>
  )
}
