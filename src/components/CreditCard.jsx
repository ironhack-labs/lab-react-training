import React from 'react';

function CreditCard(props) {

function cardNumber(){
    let number= props.number.substring(12)
    return `•••• •••• •••• ${number}`
}
function cardImage(){
    if(props.type==="Visa"){
return props.type==="/img/visa.png"
    }else {
       return props.type==="/img/mastercard.svg"
    }
}


  return (
    <div style={{backgroundColor:`${props.bgColor}`,color:`${props.color}`, width:400, margin: 10, borderRadius:20}}>
      <img src={cardImage()} alt={props.type} />
      <p>{cardNumber()}</p>
      <p>
        Expires {props.expirationMonth}/{props.expirationYear}
      </p>
      <span>{props.bank}</span>
      <p>{props.owner}</p>
    </div>
  );
}

export default CreditCard;
