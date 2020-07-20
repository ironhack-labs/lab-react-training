import React from 'react';
import '../css/creditCard.css';

/*
<CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />
 */

const CreditCard = (props) => {

const cryptNumber = () => {
    var last4digits = String(props.number).slice(-4)
    return `•••• •••• •••• ${last4digits}`
}

const month = () => {
    var month2digits;
    if (props.expirationMonth < 10) { month2digits = `0${props.expirationMonth}`}
    else month2digits = String(props.expirationMonth)
    return month2digits
}

const year = () => {
    var year2digits = String(props.expirationYear).slice(2)
    return `${year2digits}`
}

const cardType = () => {
    var cardImg;
 if (props.type === "Visa") { cardImg = '/img/visa.png'}
 else if (props.type === "Master Card") { cardImg = '/img/master-card.svg'}
return cardImg
}


  return <div className="credit-card" style={{background : props.bgColor}}>
  <img src={cardType()} alt={props.type} className="img_cb" />
     <div className="CBdigits"> {cryptNumber()} </div>
     <div className="CBdetails"> Expires {month()}/{year()}  <span className="bank"> {props.bank} </span></div>
      <div className="CBowner"> {props.owner} </div>
    

  </div>;
};

export default CreditCard;
