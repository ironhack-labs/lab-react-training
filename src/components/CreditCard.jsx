import React from 'react'

function CreditCard(props) {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;

  return (
    
<div>
    <div style={{backgroundColor: bgColor, color: color}}>
          <h1>{type}</h1>
          <h2>{number}</h2>
          <h3>{expirationMonth}/{expirationYear}</h3>
          <h4>{bank}</h4>
          <h5>{owner}</h5>
    </div>
</div> 
  )
}

export default CreditCard