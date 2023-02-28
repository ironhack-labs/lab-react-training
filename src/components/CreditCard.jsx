import React from 'react'

function CreditCard(props) {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;
  const bankStyle={
    color: `${color}`,
    backgroundColor: `${bgColor}`,
  }
  return (
<div style={bankStyle}>
       <p>{type}</p>
       <p>{number}</p>
       <p>{expirationMonth}</p>
       <p>{expirationYear}</p>
       <p>{bank}</p>
       <p>{owner}</p>
     
       
      
  </div>
  )
}

export default CreditCard