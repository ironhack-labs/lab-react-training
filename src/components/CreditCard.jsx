import React from 'react'

function CreditCard(props) {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;
    const divStyle = {
        backgroundColor: `${bgColor}`,
        color: `${color}`,
    }
        
  return (
    <div style={divStyle}>
    <p>{type}</p>
    <p>{number}</p>
    <p>{expirationMonth} /{expirationYear} /{bank}</p>
    <p>{owner}</p>
    
    </div>
  )
}

export default CreditCard