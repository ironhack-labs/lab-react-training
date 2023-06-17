import React from "react";



function CreditCard (props){
const style = {backgroundColor :props.bgColor, color:props.color}
  return(

<div style={style}>
  
  <p>{props.type}</p>
  <p>••• ••• •••{props.number.slice(12,16)}</p>
  <p>{props.expirationMonth}/ {props.expirationYear} {props.bank}</p>
  <p>{props.owner}</p>
</div>
    
  );


}


export default CreditCard;