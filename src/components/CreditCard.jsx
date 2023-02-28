import React from 'react'

function CreditCard(props) {

    const {type, number,expirationMonth, expirationYear,bank,owner, bgColor  }= props

    const divStyle = {
        
        height: "min-content",
        width: "20%",
        backgroundColor: `${bgColor}`,
        borderRadius: "5px",
        margin: "20px"}
 
        return (
        <div style={divStyle}>
        <div>{type}</div>
        <h3>{number}</h3>
        <div>Expires {expirationMonth} {expirationYear} <span>{bank}</span></div>
        <div>{owner}</div>

    </div>
  )
}

export default CreditCard