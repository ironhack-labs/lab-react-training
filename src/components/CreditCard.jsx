import React from 'react'

function CreditCard(props) {
const {type,number,expirationMonth,expirationYear,bank, owner,bgColor,color} = props

const divStyle = {
    backgroundColor: bgColor,
    color: color,
    borderRadius: '10px',
    padding: '20px',
    margin: '10px',
    display: 'inline-block',
    width: "300px",
  };

  return (
    <div style={divStyle}> {type}
    <p className='number-card'>{`•••• •••• •••• ${number.substring(number.length -4)}`}</p>
    <p>Expires {expirationMonth}/{expirationYear} {bank}</p>
    
    <p>{owner}</p>
    </div>
    
    
  )
}

export default CreditCard