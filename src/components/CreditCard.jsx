import React from 'react'

function CreditCard(props) {
const {type,number,expirationMonth,expirationYear,bank, owner,bgColor,color} = props

const divStyle = {
backgroundColor: bgColor,
color: color,
} 
  return (
    <div style={divStyle}> {type}
    <p>{`•••• •••• •••• ${number.substring(number.length -4)}`}</p>
    <p>Expires {expirationMonth}/{expirationYear}</p>
    <p>{bank}</p>
    <p>{owner}</p>
    </div>
    
    
  )
}

export default CreditCard