import React from 'react'

export default function CreditCard(props) {

  const types = (props.cardtype);
  
  function SwitchType(){
    switch(types) {
      case "visa":
        return "Visa";
      default:
        return "MasterCard";
    }
  }


  return (
    <div className="credit-card" style={{backgroundColor: props.bgcolor, color: props.textcolor, width:}}>
      <div>{SwitchType()}</div>
      <div>{props.number}</div>
      <div>{props.expdate}</div>
      <div>{props.expyear}</div>
      <div>{props.bank}</div>
      <div>{props.owner}</div>
      
    </div>
  )
}


