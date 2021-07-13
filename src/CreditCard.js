import React from 'react';


function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
  return (
      <>
    <h1>{type}</h1>
    <h2>{number}</h2>
    <h2>{expirationMonth}</h2>
    <h2>{expirationYear}</h2>
    <h3>{bank}</h3>
    <h3>{owner}</h3>
    <h3>{bgColor}</h3>
    <h3>{color}</h3>
    </> 
)

}






export default CreditCard;