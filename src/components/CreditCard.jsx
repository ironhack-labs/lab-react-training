import React from 'react'

function CreditCard(props) {
    const{type,number,expirationMonth,expirationYear,bank,owner,color,bgColor}=props
    const divStyle = {
        color:`${color}`,
        backgroundColor:`${bgColor}`}
  return (
    <div style={divStyle}>
<h5>
    <p>{type}</p>
    <p>••• ••• ••• {number.slice(-4)}</p>
    <p>{expirationMonth}</p>
    <p>{expirationYear}</p>
    <p>{bank}</p>
    <p>{owner}</p>
</h5>
    </div>
  )
}

export default CreditCard