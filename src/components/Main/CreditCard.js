import React from 'react'

export default function CreditCard(props) {
    console.log("props:", props)

    let cardLogo = "";

    switch(props.cardInfo.type){
      case 'Master': cardLogo = "src/assets/images/mastercard.svg"
      break;
      case 'Visa': cardLogo = "src/assets/images/visa.png"
      break;
      default:
      break;
    }

    let lastDigits = props.cardInfo.number.split("").splice(12,4).join("")

    const divStyle = {
      backgroundColor: `${props.cardInfo.bgColor}`
    };

  return (
    
        <div className='creditCard' style={divStyle}>
          <img src={cardLogo} alt="cardLogo"/>
          <p>&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull; {lastDigits}</p>
          <span>Expires {props.cardInfo.expirationMonth}/{props.cardInfo.expirationYear}</span>
          <span>{props.cardInfo.bank}</span>
          <p>{props.cardInfo.owner}</p>
        </div>
    
    
  )
}




   

    
