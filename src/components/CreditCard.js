import React from "react";
function CreditCard(props) {
    type="Visa" 
    number="0123456789018845"
    expirationMonth={3}
    expirationYear={2021}
    bank="BNP"
    owner="Maxence Bouret"
    bgColor="#11aa99"
    color="white" 
  />
    
    };
    
    
    return (
      <div className="CreditCard">
            <p>{props.type}</p>
            <p>{props.number}</p>
            <p>{props.expirationMonth}</p>
            <p>{props.expirationYear}</p>
            <p>{props.bank}</p>
            <p>{props.owner}</p>
            <p>{props.bgColor}</p>
            <p>{props.color}</p>

          </div>
        );
    
      
      export default CreditCard;

